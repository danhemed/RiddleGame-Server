import supabase from "../db/connection/connectSupabase.js";

export const dalPlayers = {
    async getAllPlayers() {
        const { data, error } = await supabase
            .from('players')
            .select('*')
        if (error) throw new Error(error.message);
        return data;
    },
    async getPlayerByUserName(username) {
        const { data, error } = await supabase
            .from('players')
            .select('*')
            .eq('username', username)
            .single();
        if (error) throw new Error(error.message);
        return data;
    },
    async insertNewPlayer(data) {
        const { data: result, error } = await supabase
            .from('players')
            .insert([data])
        if (error) throw new Error(error.message);
        return result;
    },
    async updatePlayer(id, data) {
        const { data: result, error } = await supabase
            .from('players')
            .update(data)
            .eq('id', id)
        if (error) throw new Error(error.message);
        return result;
    },
    async getVictories(id) {
        const { data: result, error } = await supabase
            .from('players')
            .select('wins')
            .eq('id', id)
            .single();
        if (error) throw new Error(error.message);
        return result;
    },
    async updateVictories(id, wins) {
        const { data: result, error } = await supabase
            .from('players')
            .update({ wins })
            .eq('id', id)
            .select()
            .single();
        if (error) throw new Error(error.message);
        return result;
    }
}