import { useEffect, useState } from "react";
import PostCard from "./PostCard";

import type { CollectionEntry } from "astro:content";

type Props = {
  defaultPosts: CollectionEntry<"blog">[];
  allFilters: String[];
};

const BlogPostDisplayer = ({ defaultPosts, allFilters }: Props) => {
  const [activeFilters, setActiveFilters] = useState<String[]>([]);
  const [sortDateDecending, setSortDateDecending] = useState(true);
  const [filterSelectorVisible, setFilterSelectorVisible] = useState(false);

  const addRemoveFilter = (filter: String) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters((l) => l.filter((f) => f != filter));
    } else {
      setActiveFilters((arr) => [...arr, filter]);
    }
  };

  return (
    <div>
      <button
        onClick={() => setFilterSelectorVisible(!filterSelectorVisible)}
        className="mb-4 flex items-center"
      >
        Filters{" "}
        {activeFilters.length > 0
          ? "(" + activeFilters.length + " active)"
          : ""}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={
            "transition-all " + (filterSelectorVisible ? "ml-1 rotate-90 " : "")
          }
        >
          <path
            className="fill-white"
            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
          />
        </svg>
      </button>
      {filterSelectorVisible ? (
        <div className="flex justify-between mb-4">
          <div>
            {allFilters.map((f) => (
              <button
                className={
                  "border border-sky-500 transition-all hover:bg-sky-400 rounded font-bold text-sky-500 hover:text-white text-center align-middle p-2 py-1 cursor-pointer mr-3 " +
                  (activeFilters.includes(f) ? "bg-sky-400 !text-white" : "")
                }
                onClick={() => {
                  addRemoveFilter(f);
                }}
              >
                {f}
              </button>
            ))}
          </div>
          <button onClick={() => setSortDateDecending(!sortDateDecending)}>
            {"Sort   " + (sortDateDecending ? "down" : "up")}
          </button>
        </div>
      ) : (
        <></>
      )}

      {defaultPosts
        .filter((p) =>
          p.data.tags.some(
            (tag) => activeFilters.includes(tag) || activeFilters.length == 0
          )
        )
        .sort((a, b) => {
          if (sortDateDecending) {
            return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
          } else {
            return a.data.pubDate.valueOf() - b.data.pubDate.valueOf();
          }
        })
        .map((post) => (
          <PostCard
            href={`/blog/${post.slug}/`}
            title={post.data.title}
            description={post.data.description}
            date={post.data.pubDate}
            image={post.data.cover.src}
          ></PostCard>
        ))}
    </div>
  );
};

export default BlogPostDisplayer;
