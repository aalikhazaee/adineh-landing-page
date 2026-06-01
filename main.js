document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const headerWrapper = document.getElementById("header-wrapper");
  const header = document.getElementById("main-header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      headerWrapper.classList.add("top-4", "px-4");
      header.classList.remove(
        "rounded-none",
        "max-w-7xl",
        "bg-white/95",
        "shadow-sm",
      );
      header.classList.add(
        "rounded-full",
        "max-w-5xl",
        "bg-white/70",
        "shadow-xl",
        "border-white/50",
      );
    } else {
      headerWrapper.classList.remove("top-4", "px-4");
      header.classList.add(
        "rounded-none",
        "max-w-7xl",
        "bg-white/95",
        "shadow-sm",
      );
      header.classList.remove(
        "rounded-full",
        "max-w-5xl",
        "bg-white/70",
        "shadow-xl",
        "border-white/50",
      );
    }
  });

  // Header action buttons interaction
  const actionButtons = document.querySelectorAll(".action-btn");
  let selectedButton = document.querySelector(".action-btn.selected");

  const setAnchorOnSelected = () => {
    if (selectedButton) {
      if (
        CSS.supports("position-anchor", "--selected") ||
        CSS.supports("anchor-name", "--selected")
      ) {
        selectedButton.style.anchorName = "--selected";
      }
    }
  };

  setAnchorOnSelected();

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (selectedButton) {
        selectedButton.classList.remove("selected");
        selectedButton.style.anchorName = "";
      }
      selectedButton = button;
      selectedButton.classList.add("selected");
      setAnchorOnSelected();
    });

    const handleInteractionStart = () => {
      if (button !== selectedButton) {
        if (selectedButton) selectedButton.style.anchorName = "";
        button.style.anchorName = "--selected";
      }
    };

    button.addEventListener("mouseenter", handleInteractionStart);
    button.addEventListener("focus", handleInteractionStart);

    const handleInteractionEnd = () => {
      if (button !== selectedButton) {
        button.style.anchorName = "";
        setAnchorOnSelected();
      }
    };

    button.addEventListener("mouseleave", handleInteractionEnd);
    button.addEventListener("blur", handleInteractionEnd);
  });

  // Mobile bottom navigation
  const bottomNavBtns = document.querySelectorAll(".bottom-nav-btn");
  bottomNavBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      bottomNavBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Categories UI logic
  const categoryContainer = document.getElementById("category-container");

  const baseCategories = [
    {
      id: 1,
      title: "دوازدهم",
      subtitle: "اوج رقابت و کنکور",
      icon: "ph-graduation-cap",
      gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
      shadow: "shadow-[0_15px_40px_-10px_rgba(239,68,68,0.4)]",
    },
    {
      id: 2,
      title: "یازدهم",
      subtitle: "سال سرنوشت‌ساز",
      icon: "ph-student",
      gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      shadow: "shadow-[0_15px_40px_-10px_rgba(99,102,241,0.4)]",
    },
    {
      id: 3,
      title: "دهم",
      subtitle: "شروع مسیر",
      icon: "ph-backpack",
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600",
      shadow: "shadow-[0_15px_40px_-10px_rgba(59,130,246,0.4)]",
    },
  ];

  const highSchoolCategories = [
    {
      id: "math",
      title: "ریاضی فیزیک",
      icon: "ph-math-operations",
      textClass: "text-blue-600",
      bgClass: "bg-blue-50",
      delay: "",
    },
    {
      id: "science",
      title: "علوم تجربی",
      icon: "ph-dna",
      textClass: "text-emerald-600",
      bgClass: "bg-emerald-50",
      delay: "delay-75",
    },
    {
      id: "humanities",
      title: "علوم انسانی",
      icon: "ph-books",
      textClass: "text-amber-600",
      bgClass: "bg-amber-50",
      delay: "delay-150",
    },
    {
      id: "art",
      title: "هنرستان",
      icon: "ph-palette",
      textClass: "text-violet-600",
      bgClass: "bg-violet-50",
      delay: "delay-225",
    },
  ];

  function renderBaseCategories() {
    categoryContainer.style.height =
      window.innerWidth >= 768 ? "240px" : "auto";
    categoryContainer.className =
      "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full opacity-100 transition-all duration-300";
    categoryContainer.innerHTML = "";

    baseCategories.forEach((cat, index) => {
      const card = document.createElement("div");
      card.className = `${cat.gradient} rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 text-white cursor-pointer relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 ${cat.shadow} h-[140px] md:h-[240px] flex flex-col justify-end animate-fade-in-up`;
      card.style.animationDelay = `${index * 100}ms`;

      card.innerHTML = `
        <i class="ph ${cat.icon} text-[100px] md:text-[150px] absolute -right-4 -top-4 md:-right-8 md:-top-8 opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 pointer-events-none"></i>
        <div class="relative z-10">
            <span class="bg-white/20 backdrop-blur-md px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold mb-2 md:mb-3 inline-block shadow-sm">${cat.subtitle}</span>
            <h3 class="text-2xl md:text-4xl font-black tracking-tight">${cat.title}</h3>
        </div>
        <div class="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 md:translate-x-4 group-hover:translate-x-0 border border-white/30 shadow-sm">
            <i class="ph ph-arrow-left text-lg md:text-xl font-bold"></i>
        </div>
      `;

      card.addEventListener("click", () => handleCategoryTransition(cat));
      categoryContainer.appendChild(card);
    });
  }

  function handleCategoryTransition(selectedCat) {
    const currentHeight = categoryContainer.offsetHeight;
    categoryContainer.style.height = currentHeight + "px";
    categoryContainer.style.overflow = "hidden";
    categoryContainer.classList.add("opacity-0", "scale-[0.98]");

    setTimeout(() => {
      categoryContainer.innerHTML = "";
      categoryContainer.className =
        "flex flex-col md:flex-row gap-4 md:gap-5 w-full opacity-0 scale-[0.98] transition-all duration-500 ease-out";

      const selectedPanel = document.createElement("div");
      selectedPanel.className = `${selectedCat.gradient} w-full md:w-[28%] lg:w-[25%] rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 text-white flex flex-row md:flex-col items-center md:items-start justify-between relative overflow-hidden ${selectedCat.shadow} shrink-0 h-[80px] md:h-[240px] animate-slide-in-right z-10`;
      selectedPanel.innerHTML = `
        <i class="ph ${selectedCat.icon} text-[80px] md:text-[140px] absolute -right-2 top-1/2 -translate-y-1/2 md:translate-y-0 md:-right-6 md:-top-6 opacity-10 pointer-events-none transition-transform duration-700"></i>
        <div class="relative z-10 flex flex-col items-start w-auto md:w-full">
            <span class="bg-white/20 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[9px] md:text-[11px] font-bold mb-1 md:mb-3 hidden md:inline-block">پایه انتخابی</span>
            <h3 class="text-xl md:text-3xl font-black tracking-tight">${selectedCat.title}</h3>
            <p class="text-[10px] md:text-xs opacity-80 mt-1 hidden md:block">${selectedCat.subtitle}</p>
        </div>
        <button id="back-btn" class="relative z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/20 text-white w-10 h-10 md:w-12 md:h-12 md:mt-auto rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-md shrink-0 group">
            <i class="ph ph-arrow-right text-lg md:text-xl font-bold group-hover:translate-x-1 transition-transform"></i>
        </button>
      `;
      categoryContainer.appendChild(selectedPanel);

      setTimeout(() => {
        document.getElementById("back-btn").addEventListener("click", () => {
          const tempHeight = categoryContainer.offsetHeight;
          categoryContainer.style.height = tempHeight + "px";
          categoryContainer.classList.add("opacity-0", "scale-[0.98]");
          setTimeout(renderBaseCategories, 300);
        });
      }, 50);

      const subContainer = document.createElement("div");
      subContainer.className =
        "flex-1 grid grid-cols-2 gap-3 md:gap-4 w-full md:h-[240px]";

      highSchoolCategories.forEach((sub, i) => {
        const subCard = document.createElement("div");
        subCard.className = `bg-white border border-gray-100 hover:border-${sub.textClass.split("-")[1]}-200 rounded-[1.2rem] md:rounded-[1.5rem] p-3 md:p-4 flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-right gap-2 md:gap-4 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-in-up opacity-0 relative overflow-hidden group h-[110px] md:h-auto`;
        subCard.style.animationDelay = `${(i + 1) * 75}ms`;
        subCard.innerHTML = `
            <div class="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-[1rem] ${sub.bgClass} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-3 relative z-10">
                <i class="ph ${sub.icon} text-2xl md:text-3xl ${sub.textClass}"></i>
            </div>
            <div class="relative z-10 w-full flex flex-col items-center md:items-start flex-1">
                <h4 class="font-extrabold text-gray-800 text-xs md:text-sm lg:text-base">${sub.title}</h4>
                <div class="hidden md:flex items-center gap-1 mt-1 text-[10px] lg:text-xs text-gray-400 group-hover:${sub.textClass} transition-colors">
                    مشاهده کتاب‌ها <i class="ph ph-caret-left"></i>
                </div>
            </div>
        `;
        subContainer.appendChild(subCard);
      });

      categoryContainer.appendChild(subContainer);

      categoryContainer.style.height = "auto";
      const newHeight = categoryContainer.offsetHeight;
      categoryContainer.style.height = currentHeight + "px";
      categoryContainer.offsetHeight; // force reflow
      categoryContainer.style.height = newHeight + "px";

      requestAnimationFrame(() =>
        categoryContainer.classList.remove("opacity-0", "scale-[0.98]"),
      );

      setTimeout(() => {
        categoryContainer.style.height =
          window.innerWidth >= 768 ? "240px" : "auto";
        categoryContainer.style.overflow = "visible";
      }, 500);
    }, 300);
  }

  renderBaseCategories();

  // Fetch and render products
  const productsContainer = document.getElementById("products-container");

  async function fetchProducts() {
    const cacheKey = "adineh_products_cache";
    const cacheTimeKey = "adineh_products_cache_time";
    const cacheDuration = 1000 * 60 * 15;

    const cachedData = sessionStorage.getItem(cacheKey);
    const cachedTime = sessionStorage.getItem(cacheTimeKey);

    if (cachedData && cachedTime && Date.now() - cachedTime < cacheDuration) {
      console.log("Loaded from Cache ⚡");
      renderProducts(JSON.parse(cachedData));
      return;
    }

    try {
      const response = await fetch(
        "https://adineh.market/wp-json/adineh/v1/adineh-stock/?per_page=15&limit=15",
      );

      if (!response.ok) throw new Error("Network response error");
      const data = await response.json();

      if (data && data.content) {
        sessionStorage.setItem(cacheKey, JSON.stringify(data.content));
        sessionStorage.setItem(cacheTimeKey, Date.now());
        renderProducts(data.content);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      productsContainer.innerHTML = `
        <div class="col-span-full bg-white/10 p-4 rounded-xl text-center text-white backdrop-blur-sm border border-white/20 w-full">
            <p class="text-sm">خطا در دریافت اطلاعات محصولات.</p>
        </div>`;
    }
  }

  function renderProducts(products) {
    if (!products || products.length === 0) return;
    productsContainer.innerHTML = "";

    // Shuffle for varied display
    const displayProducts = [...products].sort(() => 0.5 - Math.random());

    displayProducts.forEach((product) => {
      const title = product.product_name || "بدون عنوان";
      const originalPriceValue = parseFloat(product.cover_price);
      let priceHtml = "";

      // Fallback logic for missing sell_price
      if (!isNaN(originalPriceValue)) {
        const discountedRaw = originalPriceValue * 0.7; // 30% default discount
        const finalPrice = Math.floor(discountedRaw / 1000) * 1000;

        priceHtml = `
          <div class="flex flex-col items-end">
              <div class="flex items-center gap-1.5 mb-1">
                  <span class="bg-discount text-white text-[11px] font-black px-1.5 py-0.5 rounded shadow-sm" dir="ltr">-30%</span>
                  <span class="text-xs md:text-[13px] text-gray-400 line-through decoration-gray-400 decoration-2">${originalPriceValue.toLocaleString("fa-IR")}</span>
              </div>
              <div class="text-brand-dark font-black text-lg md:text-[22px] leading-none flex items-center gap-1">
                  ${finalPrice.toLocaleString("fa-IR")} <span class="text-[10px] md:text-xs font-medium text-gray-500">تومان</span>
              </div>
          </div>
        `;
      } else {
        priceHtml = `<div class="text-brand-dark font-black text-sm md:text-base">تماس بگیرید</div>`;
      }

      const imgUrl = "https://via.placeholder.com/150x200?text=بدون+عکس";
      const inStock = product.stock_status === "1";

      const card = document.createElement("div");
      card.className =
        "w-[160px] md:w-[200px] lg:w-[220px] shrink-0 snap-center bg-white rounded-[1.2rem] p-3 text-gray-800 shadow-sm flex flex-col h-full fade-in cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg transition-all duration-300";

      card.innerHTML = `
        <div class="relative w-full aspect-[3/4] bg-gray-100 rounded-[1rem] mb-3 overflow-hidden pointer-events-none">
            <img src="${imgUrl}" alt="${title}" class="w-full h-full object-cover" draggable="false">
            <div class="absolute top-2 right-2 bg-brand-dark/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">دست‌دوم</div>
        </div>
        <h3 class="font-bold text-sm md:text-base leading-tight mb-2 line-clamp-2 min-h-[2.5rem]" title="${title}">${title}</h3>
        <div class="flex justify-between items-end mt-auto pt-3 border-t border-gray-100 w-full gap-2">
            <div class="mb-1 shrink-0">
                <span class="${inStock ? "bg-green-50 text-green-600 border-green-200" : "bg-red-50 text-red-500 border-red-200"} border text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md">
                    ${inStock ? "موجود" : "ناموجود"}
                </span>
            </div>
            ${priceHtml}
        </div>
      `;
      productsContainer.appendChild(card);
    });
  }

  // Desktop horizontal scroll logic
  const productsSlider = document.getElementById("products-container");
  const rightBtn = document.getElementById("slider-right-btn");
  const leftBtn = document.getElementById("slider-left-btn");
  let isDown = false,
    startX,
    scrollLeft,
    isDragging = false;

  if (productsSlider) {
    if (rightBtn)
      rightBtn.addEventListener("click", () =>
        productsSlider.scrollBy({ left: 300, behavior: "smooth" }),
      );
    if (leftBtn)
      leftBtn.addEventListener("click", () =>
        productsSlider.scrollBy({ left: -300, behavior: "smooth" }),
      );

    const stopDrag = () => {
      if (!isDown) return;
      isDown = false;
      productsSlider.classList.replace("cursor-grabbing", "cursor-grab");
      productsSlider.style.scrollBehavior = "smooth";
      productsSlider.classList.add("snap-x", "snap-mandatory");
      setTimeout(() => (productsSlider.style.scrollBehavior = "auto"), 300);
    };

    productsSlider.addEventListener("mousedown", (e) => {
      isDown = true;
      isDragging = false;
      productsSlider.style.scrollBehavior = "auto";
      productsSlider.classList.replace("cursor-grab", "cursor-grabbing");
      productsSlider.classList.remove("snap-x", "snap-mandatory");
      startX = e.pageX - productsSlider.offsetLeft;
      scrollLeft = productsSlider.scrollLeft;
    });

    productsSlider.addEventListener("mouseleave", stopDrag);
    productsSlider.addEventListener("mouseup", stopDrag);
    productsSlider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      isDragging = true;
      const x = e.pageX - productsSlider.offsetLeft;
      productsSlider.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });

    productsSlider.addEventListener("click", (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }

  // Hero slider
  const sliderContainer = document.getElementById("slider-container");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  const dots = document.querySelectorAll(".slider-dot");
  let currentSlide = 0;
  const totalSlides = 2;
  let sliderInterval;

  function updateSlider() {
    if (!sliderContainer) return;
    sliderContainer.style.transform = `translateX(${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.replace("bg-white/50", "bg-white");
        dot.classList.add("w-6", "md:w-8");
        dot.classList.remove("w-2", "md:w-2.5");
      } else {
        dot.classList.replace("bg-white", "bg-white/50");
        dot.classList.add("w-2", "md:w-2.5");
        dot.classList.remove("w-6", "md:w-8");
      }
    });
  }

  function startAutoSlide() {
    sliderInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(sliderInterval);
    startAutoSlide();
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
      resetAutoSlide();
    });
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
      resetAutoSlide();
    });
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
        resetAutoSlide();
      });
    });
    startAutoSlide();
  }

  // Init
  fetchProducts();
});
