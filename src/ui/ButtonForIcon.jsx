function ButtonForIcon({icon, ...props}) {
    return (
        <div>
            <button style={{outline: 'none', border: 'none', background: 'none', cursor: 'pointer'}} {...props}  className="btn-icon">
                {icon}
              </button>
        </div>
    );
}

export default ButtonForIcon;