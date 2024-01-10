
const skills: string[] = ["Bahs", "Counter", "Healing", true, 123];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
    


}

const strider: Character = {
    name: "Straider",
    hp: 100,
    skills: ["Bahs", "Counter"],
};

strider.hometown = "Rivendell";

console.table(strider);



export {};