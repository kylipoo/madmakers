const story = (fields, id) => {
    let resp = "";
    switch (id) {
        case 1: resp = `Knock knock! <span>(${fields[0].value})</span>? Who!  <span>(${fields[1].value})</span>? You're not an owl.`;
        break;

        case 2: resp = `Knock knock! <span>(${fields[0].value})</span>? Yeah!  <span>(${fields[1].value})</span>? What are you so excited about today?`;
        break;

        case 3: resp = `Knock knock! <span>(${fields[0].value})</span>? Totally!  <span>(${fields[1].value})</span>? You like to yodel?`;
        break;

        case 4: resp = `Knock knock! <span>(${fields[0].value})</span>? Attach!  <span>(${fields[1].value})</span>? Bless you!`;
        break;
        case 5: resp = `Knock knock! <span>(${fields[0].value})</span>? Thumb!  <span>(${fields[1].value})</span>? Thumb people want to come inside!`;
        break;
        default:
            break;
    }
    return resp;
}

export default story;