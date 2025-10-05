import React, { useEffect, useState } from "react";
import cardImage from "../assets/card.png";
import { SlCalender } from "react-icons/sl";
import { MdOutlineManageAccounts } from "react-icons/md";

const StoriesSection = () => {
  const [content, setContent] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content_categories);
        setActiveCategory(data.ui_config.active_category);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-400">Loading...</div>;
  }

  const activeData = content.find((c) => c.id === activeCategory);

  return (
    <section className="text-white py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="text-center space-y-3 mb-10 max-w-3xl">
        <h2 className="font-semibold text-5xl">
          The Success Stories, <br /> Case Studies & Blog
        </h2>
        <p>
          Based on the description of Metro solver and the image provided, here is a <br />
          6-step process that Metro solver uses to scale a customer's business
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {content.map((cat) => (
  <div
    key={cat.id}
    className={`rounded-full  ${activeCategory === cat.id ? "rounded-full bg-gradient-to-r from-[#C16EFD] to-[#FFFFFF]" : ""}`}
  >
    <button
      onClick={() => setActiveCategory(cat.id)}
      className={`px-5 py-2 rounded-full transition-all cursor-pointer w-full text-white ${
        activeCategory === cat.id
          ? "bg-gradient-to-b from-[#41295A] to-[#2F0743]"
          : "bg-gray-500/20 hover:text-white border border-gray-600"
      }`}
    >
      {cat.name}
    </button>
  </div>
))}

      </div>

      <div
        className={`grid w-full max-w-5xl justify-center ${activeData.cards.length > 1
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
          } gap-8`}
      >
        {activeData.cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-500/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
            style={{
              borderWidth: "0px 1px 1px 1px",
              borderStyle: "solid",
              borderColor: "transparent",
            }}
          >
            {activeData.type === "stories" && (
              <div className="flex flex-col items-center gap-4 hover:bg-[linear-gradient(105.32deg,#361A67_11.27%,#1B1B31_20.43%,#251F40_57.77%,#412178_87.6%)] hover:border-[linear-gradient(92.72deg,#C16EFD_33.06%,#FFFFFF_81.02%)] transition-all rounded-2xl">
                <img
                  src={cardImage}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col justify-between h-[300px] w-full">
                  <div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-gray-400 mt-2 line-clamp-3">{card.description}</p>
                    <p className="text-purple-400 font-medium mt-2">{card.metrics}</p>
                  </div>
                  <div className="flex flex-wrap mt-auto text-sm gap-3 text-gray-300">
                    <span className="bg-gray-500/30 px-3 py-1 rounded-full whitespace-nowrap min-w-[90px] text-center">
                      {card.total_views} Views
                    </span>
                    <span className="bg-gray-500/30 px-3 py-1 rounded-full whitespace-nowrap min-w-[120px] text-center">
                      {card.lower_cpa} Lower CPA
                    </span>
                    <span className="bg-gray-500/30 px-3 py-1 rounded-full whitespace-nowrap min-w-[150px] text-center">
                      {card.total_sales} Sales Generated
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeData.type === "studies" && (
              <div className="flex flex-col items-center gap-3 hover:bg-[linear-gradient(105.32deg,#361A67_11.27%,#1B1B31_20.43%,#251F40_57.77%,#412178_87.6%)] hover:border-[linear-gradient(92.72deg,#C16EFD_33.06%,#FFFFFF_81.02%)] transition-all rounded-2xl">
                <img
                  src={cardImage}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col justify-between h-[240px] w-full">
                  <div className="flex-1 overflow-hidden">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-gray-400 mt-2 line-clamp-3">{card.description}</p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <span className="text-sm bg-gray-500/30 px-3 py-1 rounded-full flex gap-1 items-center w-fit">
                      <SlCalender className="text-gray-300" />
                      {card.date}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeData.type === "blog" && (
              <div className="flex flex-col items-center gap-3 hover:bg-[linear-gradient(105.32deg,#361A67_11.27%,#1B1B31_20.43%,#251F40_57.77%,#412178_87.6%)] hover:border-[linear-gradient(92.72deg,#C16EFD_33.06%,#FFFFFF_81.02%)] transition-all rounded-2xl">
                <img
                  src={cardImage}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col justify-between h-[260px] w-full">
                  <div className="flex-1 overflow-hidden">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-gray-400 mt-2 line-clamp-3">{card.excerpt}</p>
                  </div>
                  <div className="flex justify-center items-center gap-4 text-xs mt-auto">
                    <span className="text-sm bg-gray-500/30 px-3 py-1 rounded-full flex gap-1 items-center w-fit">
                      <SlCalender className="text-gray-300" />
                      {card.date}
                    </span>
                    <span className="text-sm bg-gray-500/30 px-3 py-1 rounded-full flex gap-1 items-center w-fit">
                      <MdOutlineManageAccounts className="text-gray-300" />
                      {card.views}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-full p-[1px] bg-gradient-to-r from-[#C16EFD] to-[#FFFFFF] ">
        <button className="px-6 py-2 rounded-full cursor-pointer text-white bg-gradient-to-b from-[#41295A] to-[#2F0743] w-full">
          View More
        </button>
      </div>

    </section>
  );
};

export default StoriesSection;
