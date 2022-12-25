import React from "react";
import { useSearchParams } from "react-router-dom";
import { getbyId } from "../../actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import "./details.css"

function Details(props) {
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbyId(id));
  }, []);
  let { isloading, users } = useSelector((state) => state.users);
  console.log(users);
  return (
    <>
    {isloading ? <div className="loading"><CircularProgress/></div>:
    <div className="details-main">

      <div className="photo">
        <img src={users.file?users.file:
      (users.gender==="male"
?"https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-44.jpg?size=338&ext=jpg&ga=GA1.2.144716372.1657201863"
:"https://img.freepik.com/premium-psd/3d-female-cartoon-character-avatar-isolated-3d-rendering_235528-956.jpg?size=338&ext=jpg&ga=GA1.2.144716372.1657201863")
}/>
      </div>

      <div className="data">
        <h2>{users.username}</h2>
        <p>{users.email}</p>
        <p>
          {users.about
            ? users.about
            : `hey nerds! i'm intense focused,
     contact me if you wanna make me your academic partner`}
        </p>

        <div className="social-accounts">
        {/* { ? <p>"</p>: */}
        
          <p>
        {  !users.facebook && !users.instagram ?<h6>Doesn't have any social media account</h6> :
         <>
          {users.facebook ? <a href={users.facebook}>facebook</a>:<h6>Doesn't have facebook account</h6>}<br/>
          {users.instagram ? <a href={`https://www.instagram.com/${users.instagram}`}>instagram</a>:<h6>Doesn't have instagram account</h6>}
         </>
        
       }
          </p>
        
      
    
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default Details;
