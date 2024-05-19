function validateImage(data){

    let review = null;
    let post = null; 

    if(data === undefined) {
        review = null;
        post = null;

    } else {

        review = data;
        post = data;
    }    
    return {review, post};
  }

  export default validateImage;