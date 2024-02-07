import supabase from "./supabase";


export async function getClientData(userId) {
    const { data, error } = await supabase.from('Clients').select('id, aicoin').eq('authId', userId);
    if (data[0] === undefined){
        await supabase.from('Clients').insert({authId: userId})
        console.log("Клієнта створено");

        data = supabase.from('Clients').select('id, aicoin').eq('authId', userId);
    } 
    return data[0]
  }

export async function getPermision(userId) {
    const { data, error } = await supabase.from('Clients').select('id, aicoin').eq('authId', userId);
    if (data[0] === undefined){
        await supabase.from('Clients').insert({authId: userId})
        console.log("Клієнта створено");

        data = supabase.from('Clients').select('id, aicoin').eq('authId', userId);
    } 
    return data[0]
  }
