export const  baseUrl ="https://eb6b-129-0-205-144.ngrok-free.app";
//export const baseUrl ="http://localhost:5004";
export const relativeUrlArchive = "archivage";
export const sendMsgUrlSuperUser= "/superUser";
export const sendMsgUrlAdmin ="/admin";

 export const GetSendMessage = async (payload,url) => {

    const formData = new FormData();
    const user_id = localStorage.getItem("user_id")
    const matricule_sender = localStorage.getItem("matricule")
    console.log("my payload and matricule" , payload , matricule_sender);
    if (payload.files != null) {
        
        let piecesJointeTab = [] ;
        payload.files.forEach((pieceJointe) => {
                 console.log(pieceJointe);
            const pieceJointePayLoad = {
                nom : pieceJointe.name,
                extension : pieceJointe.type
            }
            piecesJointeTab.push(pieceJointePayLoad)
            formData.append('files', pieceJointe)
    })
        console.log("piece jointe Tabulation",piecesJointeTab);
        formData.append('piecesJointes',JSON.stringify(piecesJointeTab));
}  
     formData.append("message",payload.value)
     formData.append("destinateur", payload.matricule)
     formData.append("type", 'message')
    formData.append("id_utilisateur", user_id)
    formData.append("information", matricule_sender)
    formData.append("description", payload.object)
    
    const res = await fetch( url, {
        method: "POST",
        body: formData,
    }
    ).then((res) => res.json())
    console.log("response", res.state);
    return res.state 
  };

  export const getMessageByMatricule=(matricule)=>{
    
    const response = async (url ,matricule) => {
        return fetch(url).then((res) => res.json());
      };

    return response
      .then(async (result) => {
        return { result };
      })
      .catch((e) => {
        console.log(e);
        const success = { success: false };
        return success;
      });
  } 