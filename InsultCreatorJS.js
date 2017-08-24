<!-- InsultCreatorJS -->
<!-- 2016-08, Johan Andersson, johan.andersson.78@gmail.com -->
<!-- Apache License, Version 2.0, January 2004, http://www.apache.org/licenses/ -->
<!-- Shout-out / attribution to Craveonline/Mandatory.com "http://www.craveonline.com/mandatory/1045204-the-ultimate-insult-creator" for creating the data-set! -->

function funcCreateInsult() {
    <!-- Insult Data -->
    var dataInsultsPerPart = 19;
    var dataInsultPart1 = ['Lazy', 'Stupid', 'Insecure', 'Idiotic', 'Slimy', 'Slutty', 'Smelly', 'Pompous', 'Communist', 'Dicknose', 'Pie-eating', 'Racist', 'Elitist', 'White-trash', 'Drug-Loving', 'Butterface', 'Tone-deaf', 'Ugly', 'Creepy'];
    var dataInsultPart2 = ['Douche', 'Ass', 'Turd', 'Rectum', 'Butt', 'Cock', 'Shit', 'Crotch', 'Bitch', 'Turd', 'Prick', 'Slut', 'Taint', 'Fuck', 'Dick', 'Boner', 'Shart', 'Nut', 'Sphincteer'];
    var dataInsultPart3 = ['Pilot', 'Canoe', 'Captain', 'Pirate', 'Hammer', 'Knob', 'Box', 'Jockey', 'Nazi', 'Waffle', 'Goblin', 'Blossum', 'Biscuit', 'Clown', 'Socket', 'Monster', 'Hound', 'Dragon', 'Balloon'];
    
    <!-- Create Insult -->
    <!-- Generate random numbers for Insult Parts -->
    <!-- "Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)". -->
    <!-- "The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result." -->
    <!-- = Random number between 0 and "dataInsultsPerPart - 1" -->
    <!-- The dataInsultParts starts at 0 so our random numbers have the correct range. -->
    var varIP1 = Math.floor((Math.random() * dataInsultsPerPart));
    var varIP2 = Math.floor((Math.random() * dataInsultsPerPart));
    var varIP3 = Math.floor((Math.random() * dataInsultsPerPart));
        
    <!-- Return complete Insult -->
    return dataInsultPart1[varIP1] + ' ' + dataInsultPart2[varIP2] + ' ' + dataInsultPart3[varIP3];
}

funcPrintInsultToId (printId) {
    <!-- Display Insult to printId -->
    document.getElementById(printId).innerHTML = funcCreateInsult() + '!';
}
