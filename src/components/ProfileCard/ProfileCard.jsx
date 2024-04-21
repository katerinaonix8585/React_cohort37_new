import "./styles.css"

function ProfileCard() {
const userData = {
    avatar: "https://img.freepik.com/premium-photo/meet-adorable-3d-baby-zebra-with-big-expressive-eyes-that-will-melt-your-heart-this-cartoon-cr_1032785-4269.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading","Travelling","Photography"], 
}

  return (<div className="profile-card-wrapper">
      <img src={userData.avatar} />
      <h3>{userData.userName}</h3>
      <p><span className="property-name">Profession:</span> {userData.profession}</p>
      <p><span className="property-name">Hobby:</span> {userData.hobbies[0]}</p>      
  </div>
  );  
}

export default ProfileCard;