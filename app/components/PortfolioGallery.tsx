"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { PortfolioItem } from "../portfolio/portfolioData";

const PAGE_SIZE = 9;

export default function PortfolioGallery({ categories, items }: { categories: string[]; items: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(
    () => (activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory)),
    [activeCategory, items]
  );

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageItems = filteredItems.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  return (
    <>
      <div className="portfolio-filter-row" role="tablist" aria-label="Portfolio categories" data-aos="fade-up">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "active" : ""}
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid" key={`${activeCategory}-${safePage}`}>
        {pageItems.map((item, index) => (
          <article
            className="portfolio-card"
            key={`${item.category}-${item.title}`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <Image src={item.image} alt={item.alt} width={640} height={480} />
            <div className="portfolio-overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="portfolio-pagination" aria-label="Portfolio pagination">
          <button
            type="button"
            className="portfolio-page-nav"
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <div className="portfolio-page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                type="button"
                key={page}
                className={`portfolio-page-num${page === safePage ? " active" : ""}`}
                onClick={() => goToPage(page)}
                aria-current={page === safePage ? "page" : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="portfolio-page-nav"
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            aria-label="Next page"
          >
            Next <ChevronRight size={16} />
          </button>
        </nav>
      )}
    </>
  );
}
