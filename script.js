function generateRandomNickname(){
    const randomGirlsNames = ["Mini-Me", "Belle", "Ladybug", "Charlie’s Angel", "Queenie", "Rosey", "Squishy", "Kitten", "Stinker", "Princess Peach", "Cutie Patootie", "Hobbit", "Jolly", "Juice", "Mother of Dragons", "Coo Coo", "Rabbit Ears", "Smitten Kitten", "Energizer Bunny", "Squeaky", "Funny Girl", "Vicious", "Gopher", "Sphinx", "Spanky", "Ding dong", "Cowgirl", "Snapdragon", "Hot Cocoa", "Beefy", "Mulan", "Ninja", "Stem", "Wildberry", "Lightning", "Wonder Woman", "Jazzy", "Rum Punch", "Brandy", "Flawless", "Mulan", "Hottie", "Venus", "Kit-Kat", "Apple Pie", "Poppy", "Jelly Bean", "Lotus", "Rummy", "Chrysanthemum", "Awesome Blossom", "Tinker Bell", "Firey", "Friendsies", "Sparkles", "Rainbow Bright", "Black Diamond", "Bosom Buddy", "Hela", "Gal Pal", "Perfect 10", "Peachy Keen", "Missy", "Brown eyes", "Fighter", "Curly Q", "Crazy Queen", "Friendsies", "Care Bear", "Lovey Dovey", "Dolley", "Cookie", "Munchkin", "Duchess", "Polka-Dot", "S’Mores", "Boo Boo Bear", "Daffodil", "Pixie", "Daisy", "Ginger Spice", "Honey Pot", "Iris", "Lilac", "Mitten", "Twinkle", "Twinky", "Buckwild", "Bloomer", "Beanstalk", "Hurricane", "Oompa Loompa", "Energizer Bunny", "Good’n’Plenty", "Hangry", "Cutlass", "Eclipse", "Eclipse", "Hoops", "Peppermint", "Katniss", "Wildberry", "Martini", "Jessica Rabbit", "Junior Mint", "Banana Muffin", "Peaches", "Almond Joy", "Brownie", "Alexa", "Siri", "Chocolate Chip", "SuPlum", "SuPie", "Hershey Kiss", "Pigtails", "Maple", "BonBon", "Popsicle", "Cocktailly", "Cattail", "Chicklet", "Moonglet", "Fennel", "Fresh", "Ice Pop", "Vitamin C", "Twix", "Soda Pop", "Minty", "Cocky", "Pussy", "Nooby", "Goofy", "Alias", "Meatball", "Elentra", "Bae-ritto", "Baby Doll", "Chikanie", "For Big Friendly Giant", "Bosom Buddy", "Silly Goof", "Senorita", "Friendsies", "Susie Q", "Compadre", "Chirpy", "Pata"]; 
    const randomBoysNames = ["Rice", "Freddy", "Goldie", "Hunky", "Gem", "Piglet", "Pork Chop", "Buzzy", "Ranger", "Snatcher", "Simba", "Sparky", "Talor tat", "Night owl", "Homey cock", "Hancock", "Ankle Biter", "Gus Gus", "Gun Dealer", "Brain eater", "Chewbacca", "Gravedigger", "Food ranger", "Doofy Guy", "Cocky", "Dumbo", "Egghead", "Sidekick", "Slowbro", "Slowpoke", "Einstein", "Ambani", "Scrappy", "Clumsy wumsy", "Batman", "Dr. Strange", "Early Spike", "First Mate", "Heartbreaker", "Volcano", "Kane", "Pinto", "Bam Bam", "Bhuvam", "Bhuvan", "Kachra", "Canelo", "Gandalf", "Everblack", "Scrappy-Doo", "Scooby-Doo", "Q-Tip", "Foxxy", "Jackhammer", "Junmapatti", "Stilts", "Wood Bear", "Amigo", "Braddah", "Prettyboy", "Sexyboy", "Richie Rich", "Late comer", "Miser", "Trickstar", "Machoman", "Punk Hunk", "Slim Shady", "Randy", "Chodu", "Chaser", "Stud man", "Stupido", "Wise Guy", "Yoddha", "Dynamo", "Funnyman", "Homie", "Soldier", "Strongy", "Borat", "Boltvicer", "Butthead", "King Kong", "Kumbh karn", "Buzo", "Mukoo", "Brudder", "Bruno", "Munchkin", "Rookie", "Rugrat", "Skipper", "Powerhouse", "minuter", "Pookie", "Brunt", "Clanky", "Butterfingers", "Butterhead", "Savager", "Copycat", "One minute guy", "Heffer", "Beardo", "Weirdo", "Troublemaker", "Tattletale", "Sknookums", "Piggy bank", "My Pocket", "My bank", "Banger", "Stone Cold", "Trekker freak", "Gym freak", "Gummy Bear", "Brommando", "Daredevil", "Knight rider", "Kingo", "Luther", "Night Guardian", "Bro-efficient", "Bro-founder", "Brojack", "Hawkeye", "Keener", "Boner", "Wingman", "Broflake", "Brolife", "Brometheus", "Brotato Brotahdo", "City Boy", "Country bumpkin", "Doomsday", "Eagle Eye", "Fast Hands", "Jedi jaguar", "Stress hunter", "Mr. Steal Yo Girl", "Magneto", "Mr. handsome", "Rebelian", "Amore Mio", "Sweet-voiced", "Pedacito de Cielo", "Babs", "Bratha"]
    var Gender1 = document.getElementById("gender").value;
    if (Gender1 == "Boy"){
        document.getElementById("RN1").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN2").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN3").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN4").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN5").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN6").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN7").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN8").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN9").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
        document.getElementById("RN10").value = randomBoysNames[Math.floor(Math.random() * randomBoysNames.length)];
    } else{
        document.getElementById("RN1").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN2").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN3").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN4").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN5").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN6").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN7").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN8").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN9").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
        document.getElementById("RN10").value = randomGirlsNames[Math.floor(Math.random() * randomGirlsNames.length)];
    }
}

function generateNickname(){
    var Name = document.getElementById('Name1').value;
    var N1 = document.getElementById('Nature1').value;
    var N2 = document.getElementById('Nature2').value;
    var N3 = document.getElementById('Nature3').value;
    var firstThree = Name.substring(0,3);
    var nickName1 = N1.concat(Name);
    var nickName2 = N2.concat(Name);
    var nickName3 = N3.concat(Name);
    var nickName4 = N1.concat(firstThree);
    var nickName5 = N2.concat(firstThree);
    var nickName6 = N3.concat(firstThree);
    var nickName7 = firstThree.concat(N1);
    var nickName8 = firstThree.concat(N2);
    var nickName9 = firstThree.concat(N3);
    console.log(nickName3)
    document.getElementById("N1").value = nickName1;
    document.getElementById("N2").value = nickName2;
    document.getElementById("N3").value = nickName3;
    document.getElementById("N4").value = nickName4;
    document.getElementById("N5").value = nickName5;
    document.getElementById("N6").value = nickName6;
    document.getElementById("N7").value = nickName7;
    document.getElementById("N8").value = nickName8;
    document.getElementById("N9").value = nickName9;
}

function tapCopy(){
    var copyText = document.getElementById("N1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy2(){
    var copyText = document.getElementById("N2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy3(){
    var copyText = document.getElementById("N3");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy4(){
    var copyText = document.getElementById("N4");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy5(){
    var copyText = document.getElementById("N5");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy6(){
    var copyText = document.getElementById("N6");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy7(){
    var copyText = document.getElementById("N7");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy8(){
    var copyText = document.getElementById("N8");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopy9(){
    var copyText = document.getElementById("N9");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr1(){
    var copyText = document.getElementById("RN1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr2(){
    var copyText = document.getElementById("RN2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr3(){
    var copyText = document.getElementById("RN3");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr4(){
    var copyText = document.getElementById("RN4");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr5(){
    var copyText = document.getElementById("RN5");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr6(){
    var copyText = document.getElementById("RN6");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr7(){
    var copyText = document.getElementById("RN7");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr8(){
    var copyText = document.getElementById("RN8");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr9(){
    var copyText = document.getElementById("RN9");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function tapCopyr10(){
    var copyText = document.getElementById("RN10");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}