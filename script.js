var name = 'Derrick Jenkins';

console.log('Name: ' + name.toUpperCase());
console.log ('Career: Student at Covalence Chattanooga');
console.log('Description: Tinkerer, INTJ, dreamer');

console.log('My Interests:');
console.log('*Video Games');
console.log('*Mountain Biking');
console.log('*Traveling');

console.log('My Previous Experience');

function displayPosition(companyName, jobTitle, description){
    console.log('*' + companyName +',' + jobTitle + ',' + description);
}

displayPosition ('Bonefish Grill', 'Assistant Culinary Manager', 'Line quality checks, assessing day to day staffing needs, working knowledge of all kitchen roles to assist where neccessary');
displayPosition ('Volkswagen', 'Assembly', 'Quality checkpoints, adhereing to standard work and best practices');
displayPosition ('UsXpress', 'Customer Service Representative', 'Booking freight based on market needs, addressing customer needs, tracking and tracing freight');

console.log('My Skills');
function displaySkill(skill, cool){
    if(cool === true) {
        console.log('*BAM: ' + skill);
    } else {
        console.log('*' + skill);
    }
}

displaySkill ('Spinning Plates', true);
displaySkill ('Spanish', false);
displaySkill ('Skateboarding', true);
displaySkill ('Nunchucks', true);