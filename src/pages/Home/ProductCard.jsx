import { useState } from "react";
import styled from "styled-components";

import Button from "../../ui/Button";
import checkmarkIcon from "/src/assets/products/checkmark.svg";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const CardTabs = styled.div`
  width: 54rem;
  height: 4rem;

  display: flex;
  justify-content: space-around;

  @media (max-width: 560px) {
    width: 40rem;
    margin-bottom: 2rem;
  }
`;

const MonthTabs = styled.ul`
  display: flex;

  border-radius: 100px;
  background: #232838;
`;

const MonthTab = styled.li`
  background: ${(props) => `${props.isactive ? "#415e74" : "#232838"}`};
  color: ${(props) => `${props.isactive ? "#fff" : "#9da3ae"}`};

  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  @media (max-width: 560px) {
    width: 6.5rem;
    font-size: 1rem;
  }
`;

const PriceTab = styled.div`
  position: relative;

  &:after {
    content: "↓";
    color: #fff;
    position: absolute;
    top: 50%;
    right: 1.75rem;
    transform: translateY(-50%);
  }

  select {
    width: 10rem;
    height: 100%;
    position: relative;
    border: none;
    border-radius: 100px;
    background: #415e74;
    color: #fff;
    font-weight: 500;
    outline: none !important;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1.75rem;
    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    option {
      width: 10rem;
      height: 4rem;
    }
  }
`;

const Card = styled.div`
  width: 37.5rem;
  height: 45rem;
  padding-bottom: 1rem;
  position: relative;

  border-radius: 20px;
  background: linear-gradient(195deg, #416076 2.98%, #3b4360 74.89%);
  text-align: center;
`;

const Discount = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 5rem;
  border-radius: 100px;
  background: var(--color-secondary);
  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 1.15px;
`;

const CardHeading = styled.h3`
  margin: 3rem 0 2rem 0;
  color: var(--color-grey-200);
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1.2;
`;

const CardSubHeading = styled.p`
  margin-bottom: 3rem;
  color: #bcc4d2;
  font-size: 1.2rem;
`;

const MonthPrice = styled.p`
  margin-bottom: 1rem;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 100;

  span:first-child {
    font-weight: 500;
  }

  span:last-child {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const MonthInfo = styled.div`
  margin-bottom: 2rem;
  color: #bcc4d2;
  font-size: 1.4rem;

  span:first-child {
    color: var(--color-secondary);
    text-decoration: line-through;
  }

  span:last-child {
    font-weight: 500;
  }
`;

const WorkersCount = styled.div`
  margin-bottom: 4rem;
  color: #bcc4d2;
  font-weight: 300;

  select {
    width: 8rem;
    margin-right: 1rem;
    padding-left: 0.5rem;
    border: none;
    border-radius: 4px;
    background: #303b50;
    color: #fff;
    font-weight: 400;
    outline: none;
  }
`;

const Divider = styled.div`
  margin: 3.5rem 0 0.75rem 0;
  border-bottom: 1px solid #5d637b;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 2rem 0;
  }
`;

const CardFooter = styled.footer`
  padding: 0 0.75rem;
  color: #bcc4d2;
  font-size: 1rem;
  text-align: center;
`;

const CardBackInfo = styled.div`
  width: 37.5rem;
  height: 45rem;

  border-radius: 20px;
  background: linear-gradient(195deg, #416076 2.78%, #3a4360 71.89%);
  text-align: center;
`;

const CardHeadingBack = styled.h3`
  margin: 1rem 0;
  color: var(--color-grey-200);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.2;
`;

const CardSubHeadingBack = styled.p`
  margin-bottom: 1rem;
  padding: 0 2rem;
  color: #bcc4d2;
  font-size: 1.2rem;
  font-weight: 500;
`;

const DividerBack = styled.div`
  margin: 0rem 0 1rem 0;
  border-bottom: 1px solid #5d637b;
`;

const InfoTable = styled.div`
  width: 80%;
  height: 20rem;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  color: #bcc4d2;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* margin-bottom: 0.5rem;  */
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: 1px solid #fff;

  span:last-child {
    padding: 0 1rem;
    border-radius: 20px 20px 0px 0px;
    background: rgba(12, 69, 92, 0.92);
    font-size: 1.2rem;
  }
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.3rem;
  border-bottom: 1px solid #bcc4d2;
  font-size: 1.2rem;
  text-align: left;

  img {
    padding: 0 3.75rem;
    background: rgba(12, 69, 92, 0.92);
  }
`;

function ProductCard() {
  const [activeMonthTab, setActiveMonthTab] = useState(0);
  const [currency, setCurrency] = useState("$ USD");
  const [isBackCard, setIsBackCard] = useState(false);

  const monthTabNames = ["1 month", "3 months", "6 months", "12 months"];
  const currencies = ["€ EUR", "$ USD", "₴ UAH"];

  return (
    <CardContainer>
      <CardTabs>
        <MonthTabs>
          {monthTabNames.map((tab, i) => (
            <MonthTab
              isactive={i === activeMonthTab ? "active" : undefined}
              onClick={() => setActiveMonthTab(i)}
              key={tab}
            >
              {tab}
            </MonthTab>
          ))}
        </MonthTabs>
        <PriceTab
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <select>
            {currencies.map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
          </select>
        </PriceTab>
      </CardTabs>

      {!isBackCard && (
        <Card>
          <Discount>-18%</Discount>
          <CardHeading>Telegram</CardHeading>
          <CardSubHeading>
            Telegram Broadcasts: Simple, Fast, Effective!
          </CardSubHeading>
          <MonthPrice>
            {currency[0]} <span>55</span> <span>/mo*</span>
          </MonthPrice>
          <MonthInfo>
            <span>{currency[0]}60</span> <span>{currency[0]}165</span> for{" "}
            {monthTabNames[activeMonthTab][0]} months
          </MonthInfo>
          <WorkersCount>
            <select name="workers">
              <option value="1-30">1-30</option>
              <option value="31-50">31-50</option>
              <option value="51-100">51-100</option>
            </select>
            <span>People</span>
          </WorkersCount>
          <Button variation="mainCard" size="medium">
            Purchase
          </Button>
          <Button
            variation="secondaryCard"
            size="small"
            onClick={() => setIsBackCard(true)}
          >
            More details
          </Button>
          <Divider />
          <CardFooter>
            Send a Telegram mailing in just two clicks! Forget about the hassle
            of settings. Your message will reach customers instantly, making
            your communication highly efficient.
          </CardFooter>
        </Card>
      )}

      {isBackCard && (
        <CardBackInfo>
          <CardHeadingBack>Telegram</CardHeadingBack>
          <CardSubHeadingBack>
            This is a simple and convenient messenger that holds leading
            positions in the market. Make your business easier with automated
            broadcasts!
          </CardSubHeadingBack>
          <CardSubHeadingBack>
            Telegram is a vast ocean with fish, and we are confident to say that
            we have created that very fishing rod that saves your time and
            money.
          </CardSubHeadingBack>
          <DividerBack />
          <InfoTable>
            <TableHeader>
              <span>Key Features</span>
              <span>All-in-One</span>
            </TableHeader>
            <TableRow>
              <span>Potential Customers</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
            <TableRow>
              <span>Engaged Traffic</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
            <TableRow>
              <span>Increase in Sales</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
            <TableRow>
              <span>Time Savings</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
            <TableRow>
              <span>Mailing to various chat rooms</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
            <TableRow>
              <span>Huge database of chat rooms</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
            <TableRow>
              <span>Custom Program Settings</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
            <TableRow>
              <span>Ease of Use</span>
              <img src={checkmarkIcon} alt="Check mark icon" />
            </TableRow>
          </InfoTable>
          <Button variation="mainCard" size="medium">
            Purchase
          </Button>
        </CardBackInfo>
      )}
    </CardContainer>
  );
}

export default ProductCard;
