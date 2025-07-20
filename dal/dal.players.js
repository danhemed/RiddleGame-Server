import supabase from "../db/conection/connectSupabase.js";

export const dalPlayers = {
    async getAllPlayers() {
        const { data, error } = await supabase
            .from('players')
            .select('*')
        if (error) throw error;
        return data;
    },
    async insertNewPlayer(data) {
        const { data: result, error } = await supabase
            .from('players')
            .insert([data])
        if (error) throw error;
        return result;
    },
    async updatePlayer(id, data) {
        const { data: result, error } = await supabase
            .from('players')
            .update(data)
            .eq('id', id)
        if (error) throw error;
        return result;
    }
}