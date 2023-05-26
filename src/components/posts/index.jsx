import Post from "../post";
import "./posts.scss";

const posts = [
  {
    id: 1,
    name: "Rylie Leyla",
    userId: 1,
    img: "https://weblinks.ru/wp-content/uploads/2021/12/1_0nqykqs0a8tjjqbmfnjp8q-1.jpg",
    avatar:
      "https://anime-fans.ru/wp-content/uploads/2021/02/Smeshnye-anime-avy-v-luchshem-kachestve-26.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    name: "Jane Doe",
    userId: 2,
    img: "https://thumb.tildacdn.com/tild6162-3235-4939-b765-333931613137/-/resize/824x/-/format/webp/shutterstock_1399371.jpg",
    avatar:
      "https://otkrit-ka.ru/uploads/posts/2022-02/foto-i-krasivye-kartinki-na-avu-v-kontakte-2.jpg",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
