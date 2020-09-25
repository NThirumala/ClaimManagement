
export default function validate2(claim) {
    let errors2 = {};
    if(!claim.claimno.trim()){
        errors2.claimno="Claim Number required"
    }else if(claim.claimno.length > 9){
        errors2.claimno = "Claim number max length 9 only"
    }
    //else if(!(/^[A-Z]+[0-9]+$/.test(claim.claimno))){
        else if(!(/^[0-9]+$/.test(claim.claimno))){
        errors2.claimno="Invalid Number must contain Upper case and Numbers only"
    }

    if(!claim.claimprogram){
        errors2.claimprogram="Claim Program required"
    }
    else if(claim.claimprogram.length >20){
        errors2.claimprogram="Claim Program should be maximum length of 20"
    }
    if(claim.startdate > claim.enddate){
        errors2.claimEnddate = "End must greater than Start Date";
    }

    return errors2;
}

/*
if(!claim.id.trim()){
        errors2.id="Username required"
    }
    else if(!(/^[a-zA-Z0-9]+$/.test(claim.id))){
        errors2.id="Invalid ID"
    }
    */