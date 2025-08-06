document.addEventListener('DOMContentLoaded', function() {
  const products = document.querySelectorAll(".product");
  const bundleList = document.querySelector(".bundle-list");
  const subtotalEl = document.querySelector(".subtotal");
  const discountEl = document.querySelector(".discount");
  const progressFill = document.querySelector(".fill");
  const ctaBtn = document.querySelector(".cta");
  const ctaText = document.querySelector(".cta-text");
  const ctaIcon = document.querySelector(".cta-icon");

  let selectedItems = [];
  let addedToCart = false;

  products.forEach((product) => {
    const addContainer = product.querySelector(".add-container");
    const addIcon = addContainer.querySelector(".add-icon");
    const addText = addContainer.querySelector(".add-text");

    addContainer.addEventListener("click", () => {
      const id = product.dataset.id;
      const name = product.querySelector("h2").innerText;
      const price = 150;
      const img = product.querySelector("img").src;

      const existing = selectedItems.find(item => item.id === id);

      if (existing) {
        // Remove item
        selectedItems = selectedItems.filter(item => item.id !== id);
        addContainer.classList.remove("added");
        addIcon.textContent = "+";
        addText.textContent = "Add to Bundle";
      } else {
        // Add item with quantity
        selectedItems.push({ id, name, price, img, qty: 1 });
        addContainer.classList.add("added");
        addIcon.textContent = "✓";
        addText.textContent = "Added to Bundle";
      }

      updateSidebar();
    });
  });

  function updateSidebar() {
    bundleList.innerHTML = "";

    if (selectedItems.length === 0) {
      // Show 6 skeleton placeholder slots when no items are selected
      bundleList.innerHTML = `
        <li class="placeholder-item">
          <div class="bundle-left">
            <div class="placeholder-img"></div>
            <div>
              <div class="placeholder-text">Select an item</div>
              <div class="placeholder-text">$0.00</div>
              <div class="bundle-qty">
                <button disabled>-</button>
                <span class="placeholder-qty">0</span>
                <button disabled>+</button>
              </div>
            </div>
          </div>
        </li>
        <li class="placeholder-item">
          <div class="bundle-left">
            <div class="placeholder-img"></div>
            <div>
              <div class="placeholder-text">Select an item</div>
              <div class="placeholder-text">$0.00</div>
              <div class="bundle-qty">
                <button disabled>-</button>
                <span class="placeholder-qty">0</span>
                <button disabled>+</button>
              </div>
            </div>
          </div>
        </li>
        <li class="placeholder-item">
          <div class="bundle-left">
            <div class="placeholder-img"></div>
            <div>
              <div class="placeholder-text">Select an item</div>
              <div class="placeholder-text">$0.00</div>
              <div class="bundle-qty">
                <button disabled>-</button>
                <span class="placeholder-qty">0</span>
                <button disabled>+</button>
              </div>
            </div>
          </div>
        </li>
        <li class="placeholder-item">
          <div class="bundle-left">
            <div class="placeholder-img"></div>
            <div>
              <div class="placeholder-text">Select an item</div>
              <div class="placeholder-text">$0.00</div>
              <div class="bundle-qty">
                <button disabled>-</button>
                <span class="placeholder-qty">0</span>
                <button disabled>+</button>
              </div>
            </div>
          </div>
        </li>
        <li class="placeholder-item">
          <div class="bundle-left">
            <div class="placeholder-img"></div>
            <div>
              <div class="placeholder-text">Select an item</div>
              <div class="placeholder-text">$0.00</div>
              <div class="bundle-qty">
                <button disabled>-</button>
                <span class="placeholder-qty">0</span>
                <button disabled>+</button>
              </div>
            </div>
          </div>
        </li>
        <li class="placeholder-item">
          <div class="bundle-left">
            <div class="placeholder-img"></div>
            <div>
              <div class="placeholder-text">Select an item</div>
              <div class="placeholder-text">$0.00</div>
              <div class="bundle-qty">
                <button disabled>-</button>
                <span class="placeholder-qty">0</span>
                <button disabled>+</button>
              </div>
            </div>
          </div>
        </li>
      `;
    } else {
      // Add real selected items
      selectedItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="bundle-left">
            <img src="${item.img}" alt="${item.name}"/>
            <div>
              <div class="item-name">${item.name}</div>
              <div class="item-price">$${item.price.toFixed(2)}</div>
              <div class="bundle-qty">
                <button class="decrease">-</button>
                <span>${item.qty}</span>
                <button class="increase">+</button>
              </div>
            </div>
          </div>
          <span class="remove-item">🗑</span>
        `;
        bundleList.appendChild(li);

        // Quantity buttons
        li.querySelector(".increase").addEventListener("click", () => {
          item.qty++;
          updateSidebar();
        });
        li.querySelector(".decrease").addEventListener("click", () => {
          if (item.qty > 1) item.qty--;
          updateSidebar();
        });
        li.querySelector(".remove-item").addEventListener("click", () => {
          selectedItems = selectedItems.filter(i => i.id !== item.id);
          const product = document.querySelector(`.product[data-id="${item.id}"]`);
          const addContainer = product.querySelector(".add-container");
          const addIcon = addContainer.querySelector(".add-icon");
          const addText = addContainer.querySelector(".add-text");
          addContainer.classList.remove("added");
          addIcon.textContent = "+";
          addText.textContent = "Add to Bundle";
          updateSidebar();
        });
      });
    }

    const count = selectedItems.reduce((sum, i) => sum + i.qty, 0);
    progressFill.style.width = `${Math.min((count / 3) * 100, 100)}%`;

    let subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    let potentialDiscount = subtotal * 0.3;
    let appliedDiscount = count >= 3 ? potentialDiscount : 0;

    subtotalEl.textContent = `$${(subtotal - appliedDiscount).toFixed(2)}`;
    
    if (selectedItems.length > 0) {
      discountEl.innerHTML = `<span>Discount (30%)</span><span>-$${potentialDiscount.toFixed(2)}</span>`;
      if (count < 3) {
        discountEl.classList.add('pending');
      } else {
        discountEl.classList.remove('pending');
      }
    } else {
      discountEl.innerHTML = "";
      discountEl.classList.remove('pending');
    }

    if (count >= 3 && !addedToCart) {
      ctaBtn.disabled = false;
      ctaBtn.classList.add("active");
      ctaText.textContent = "Add Bundle to Cart";
    } else if (count < 3) {
      ctaBtn.disabled = true;
      ctaBtn.classList.remove("active");
      ctaText.textContent = `Add ${3 - count} more item${3 - count > 1 ? 's' : ''} to proceed`;
    }
  }

  // CTA Button
  ctaBtn.addEventListener("click", () => {
    if (!ctaBtn.disabled && !addedToCart) {
      addedToCart = true;
      ctaText.textContent = "Added to Cart";
      ctaIcon.textContent = "\u2713";
      ctaBtn.classList.add("active");
      console.log("Bundle Added:", selectedItems);
      alert("Bundle added to cart successfully! ");
      
      // Automatically refresh the page after 2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  });

  // Initialize the sidebar with placeholder items when page loads
  updateSidebar();
});