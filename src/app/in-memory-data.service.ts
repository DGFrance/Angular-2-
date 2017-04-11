import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let books = [
            {
                id:"1",
                title:"Sword of Destiny",
                category:"novel",
                author:"Book by Andrzej Sapkowski",
                description:"Sword of Destiny, is the second of the two collections of short stories, both preceding the main Witcher Saga",                
                longdesc:"sdaGeralt is a witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent.This is a collection of short stories, following the adventures of the hit collection THE LAST WISH. Join Geralt as he battles monsters, demons and prejudices alike...",
                imgurl:"../assets/SwordofDestiny.jpg"
                
            },
            {
                id:"2",
                title:"The Last Wish",
                category:"novel",
                author:"Book by Andrzej Sapkowski",
                description:"The Last Wish is the first of the two collections of short stories preceding the main Witcher Saga, written by Polish fantasy writer Andrzej Sapkowski",                
                longdesc:"Geralt of Rivia is a witcher. A cunning sorcerer. A merciless assassin.And a cold-blooded killer.His sole purpose: to destroy the monsters that plague the world.But not everything monstrous-looking is evil and not everything fair is good. . . and in every fairy tale there is a grain of truth.For fans of the video game and the uninitiated alike, The Last Wish is the opening chapter of The Witcher series.",
                imgurl:"../assets/TheLastWish.jpg"
                
            },
            {
                id:"3",
                title:"Blood of Elves",
                category:"novel",
                author:"Book by Andrzej Sapkowski",
                description:"Blood of Elves is the first novel in the Witcher Saga written by Polish fantasy writer Andrzej Sapkowski, first published in Poland in 1994",                
                longdesc:"For over a century, humans, dwarves, gnomes, and elves have lived together in relative peace. But times have changed, the uneasy peace is over, and now the races are fighting once again. The only good elf, it seems, is a dead elf.Geralt of Rivia, the cunning assassin known as The Witcher, has been waiting for the birth of a prophesied child. This child has the power to change the world - for good, or for evil.As the threat of war hangs over the land and the child is hunted for her extraordinary powers, it will become Geralt's responsibility to protect them all - and the Witcher never accepts defeat.",
                imgurl:"../assets/BloodOfElves.jpg"

            },
            {
                id:"4",
                title:"Game Station #241",
                category:"magazine",
                author:"GameStation",
                description:"Edisi April 2011",                
                imgurl:"../assets/game1.jpg"
            },
            {
                id:"5",
                title:"Game Station #190",
                category:"magazine",
                author:"GameStation",
                description:"Edisi Agustus 2011",                
                imgurl:"../assets/game2.jpg"
            },
            {
                id:"6",
                title:"Game Station #186",
                category:"magazine",
                author:"GameStation",
                description:"Edisi April 2011",                
                imgurl:"../assets/game3.jpg"
            },
            {
                id:"7",
                title:"How Big were Dinosaurus",
                category:"nonfiction",
                author:"Lita Judge",
                description:"Have you ever wondered what it would be like to take a Velociraptor for a walk, or try to brush a Tyrannosaur's teeth? We think of dinosaurs as colossal giants, but how big were they REALLY? ",                
                imgurl:"../assets/nonfic1.jpg"
            },
            {
                id:"8",
                title:"World Of Dinosaurus",
                category:"nonfiction",
                author:"BARRONS",
                description:"The transition from storybooks to intermediate readers is difficult. Ease the transition with this collection of eBraille, or electronic braille, files. ",                
                imgurl:"../assets/nonfic2.jpg"
            },
            {
                id:"9",
                title:"Rin Tin Tin The Life And The LLEGEND ",
                category:"nonfiction",
                author:"Susan Orlean",
                description:"Orlean’s personal fascination with Rin Tin Tin began began with the forbidden, a plastic figurine of Rin Tin Tin shelved in her grandfather’s office. An animal lover and pop culture flâneur, Orlean digs into the legend behind the dog to discover that Rin Tin Tin is more than just a legend, he’s immortal. Kind of.",                
                imgurl:"../assets/nonfic3.jpg"
            },
        ];
        return { books };
    }
}
