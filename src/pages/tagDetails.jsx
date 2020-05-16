import React, { Component } from "react";
import ImageTags from './../components/imageTags';
import Images from './../components/images';

class TagDetails extends Component {
  state = {
    photo: [],
    photoTags: [
      "Covid-19",
      "Work From Home",
      "Technology",
      "Nature",
      "Wallpaper",
      "People",
      "Textures and Pattern",
      "Technology",
      "Animals",
      "Travel",
      "Interiors",
      "Business and Work",
      "Food and Drink",
      "Film",
      "Architecture",
      "Spirituality",
      "Health and Wellness",
      "Fashion",
      "Experimental",
      "Art and Culture",
      "Current Events",
    ],
  };
//   handleTagClick = async (e) => {
//     const Tagname = e.target.innerText;
//     const { data } = await http.get(
//       `${unsplashApi}?page=5&per_page=30&query=${Tagname}`,
//       {
//         headers: { Authorization: `Client-ID ${client_Id}` },
//       }
//     );
//   }
  render() {
    const { photos, photoTags } = this.state;
    return (
      <div>
        <ImageTags photoTags={photoTags} />
        <Images/>
      </div>
    );
  }
}

export default TagDetails;
