import { useInjection } from "inversify-react";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { UserStore } from "../../stores/UserStore";
import { news } from "./variables";

const NewsBlog = () => {
  const {ref, inView} = useInView()
  const userStore = useInjection(UserStore)
  useEffect(()=>{
    if(inView) {
      userStore.visible = false
    } else {
      userStore.visible = true
    }
  },[inView])
  return (
    <article className="blog">
      <div className="container" ref={ref}>
        <div className="row">
          <h2 className="h2">
          Welcome to our blog and news section! <span>Welcome to our blog and news section!</span>
          </h2>
          <p className="subtitle">
          Here you will find the latest updates and insights on Another Dev and all things WEB3. Our team of experts will keep you informed on the cool stuff in the world of decentralized technologies and our personal experience. Whether you are a developer, content writer, or designer - you will defo find value in this newsletter. Or at least some high-brow gags.<br/><br/>Stay up to date with the best practices and industry insights by following Another Dev on social media.
          </p>
          <div className="blog--wrapper">
            {news.map((post,i) => {
              return (
                <div key={i}className={`item item-${i+1}`}>
                  <div className="image">
                    <img src={post.img} alt="#" />
                  </div>
                  <div className="texts">
                    <span className="overhead">{post.overhead}</span>
                    <h3 className="h3">{post.title}</h3>
                    {post.href!=="" && <a href={post.href} className="link" target="_blank">
                      Read
                    </a>}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="button--wrapper">
            <Link href="projects" >
              <a className="button">
              <span>See All Projects</span>
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy={12} r={12} fill="white" />
                <path
                  d="M5.90137 12.3998C5.90137 12.3998 8.30137 7.1998 12.5014 7.1998C16.7014 7.1998 19.1014 12.3998 19.1014 12.3998C19.1014 12.3998 16.7014 17.5998 12.5014 17.5998C8.30137 17.5998 5.90137 12.3998 5.90137 12.3998Z"
                  stroke="#282829"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5012 14.3506C13.4953 14.3506 14.3012 13.4775 14.3012 12.4006C14.3012 11.3236 13.4953 10.4506 12.5012 10.4506C11.5071 10.4506 10.7012 11.3236 10.7012 12.4006C10.7012 13.4775 11.5071 14.3506 12.5012 14.3506Z"
                  stroke="#282829"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default NewsBlog;
