import supabase from "../db/connection/connectSupabase.js";

export const dalScores = {
    async getAllPlayerScore(playerID) {
        const { data, error } = await supabase
            .from('player_scores')
            .select('*')
            .eq("player_id", playerID)
        if (error) throw new Error(error.message);
        return data;
    },
    async getAllPlayersScore() {
        const { data, error } = await supabase
            .from('player_scores')
            .select('*')
        if (error) throw new Error(error.message);
        return data;
    },
    async insertNewScore(data) {
        const { data: result, error } = await supabase
            .from('player_scores')
            .insert([data])
        if (error) throw new Error(error.message);
        return result;
    },
    async updateScore(id, data) {
        const { data: result, error } = await supabase
            .from('player_scores')
            .update(data)
            .eq('id', id)
        if (error) throw new Error(error.message);
        return result;
    }
}