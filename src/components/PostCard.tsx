import FormattedDate from "./FormattedDate";

type Props = {
  href: string;
  title: string;
  description: string;
  date: Date;
  image: string;
};

const PostCard = (props: Props) => {
  return (
    <a
      href={props.href}
      className="md:min-w-[400px] md:max-w-[900px] md:block mx-auto mb-6 md:mb-3 group"
    >
      <div className="flex flex-col w-full overflow-hidden bg-slate-800 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-xl drop-shadow-sm hover:drop-shadow-xl transition-all mb-5 md:mb-3">
        <div className="h-80 overflow-hidden">
          <img
            className="md:h-80 w-auto object-cover transition-all scale-105 group-hover:scale-100"
            src={props.image}
            alt=""
          />
        </div>
        <div className="flex flex-col p-2 justify-between">
          <div>
            <div className="font-sans font-bold text-xl md:text-2xl group-hover:text-sky-500 transition-all duration-150 ease-in-out">
              {props.title}
            </div>
            <div className="text-md md:text-lg">{props.description}</div>
          </div>

          <div className="text-md md:text-lg mt-1">
            <FormattedDate date={props.date} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;

// <style>
//     a:hover div.title-holder{
//         color: rgb(14 165 233);
//     }

//     img{
//         transform: scale(1.04);
//     }

//     a:hover img{
//         transform: scale(1);
//     }
// </style>
