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
interface PlayerItem {
    playerItemId: string,
    item: Item,
    quantity: number
}

interface Item {
    itemIndex: number,
    name: string,
    description: string,
    type: ItemType,
    image: Image
}

interface ItemType {
    typeId: number,
    typeName: string
}

interface Image {
    imageId: string,
    image: string
}