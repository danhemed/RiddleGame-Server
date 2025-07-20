import supabase from "../db/connection/connectSupabase.js";

export const dalScores = {
    async getAllPlayers() {
        const { data, error } = await supabase
            .from('players_scores')
            .select('*')
        if (error) throw error;
        return data;
    },
    async insertNewPlayer(data) {
        const { data: result, error } = await supabase
            .from('players_scores')
            .insert([data])
        if (error) throw error;
        return result;
    },
    async updatePlayer(id, data) {
        const { data: result, error } = await supabase
            .from('players_scores')
            .update(data)
            .eq('id', id)
        if (error) throw error;
        return result;
    }
}