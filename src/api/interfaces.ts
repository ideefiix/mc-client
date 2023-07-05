interface DecodedToken {
    playerName: string;
    id: string;
}

interface Player {
    playerId: string;
    playerName: string;
    MaxHp: number;
    hp: number;
    dmg: number;
    defence: number;
    helm: Equipment;
    chest: Equipment;
    legs: Equipment;
    boots: Equipment;
    weapon: Equipment;
    pet: Equipment;
}

interface Equipment {
    PlayerItemId: string;
    MaxDurability: number;
    Durability: number;
    Protection: number;
    Damage: number;
}