const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const shell = document.querySelector('.nav-shell');

toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('scroll', () => {
  shell.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero product proof: use the actual Discover/event experience as the member-facing visual.
const heroMemberShot = document.querySelector('.hero-shot-member img');
if (heroMemberShot) {
  heroMemberShot.src = 'assets/product/event-detail.webp';
  heroMemberShot.alt = 'ASTR Discover screen showing a recurring Winnipeg fitness event';
}

// Step 4: premium product proof gallery. Keep the investor narrative visual and concise.
const productSection = document.querySelector('#product');
const productHeading = productSection?.querySelector('.section-heading');
const featureGrid = productSection?.querySelector('.feature-grid');

if (productSection && productHeading && featureGrid && !productSection.querySelector('.product-proof')) {
  const proofStyles = document.createElement('style');
  proofStyles.textContent = `
    .product-proof{
      margin:8px 0 64px;
    }
    .product-proof-intro{
      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      gap:28px;
      margin-bottom:22px;
    }
    .product-proof-intro h3{
      margin:0;
      font-size:clamp(24px,2.5vw,36px);
      line-height:1.08;
    }
    .product-proof-intro p{
      margin:0;
      max-width:520px;
      color:#a6aa94;
      font-size:15px;
    }
    .product-proof-grid{
      display:grid;
      grid-template-columns:1.05fr .95fr;
      gap:14px;
    }
    .product-proof-stack{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }
    .product-proof-card{
      position:relative;
      overflow:hidden;
      min-width:0;
      border:1px solid rgba(203,230,59,.20);
      border-radius:26px;
      background:
        linear-gradient(180deg,rgba(203,230,59,.035),rgba(203,230,59,.012)),
        #090a07;
      box-shadow:0 26px 70px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.035);
    }
    .product-proof-card::after{
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      background:linear-gradient(180deg,transparent 58%,rgba(3,4,2,.80) 100%);
    }
    .product-proof-card img{
      display:block;
      width:100%;
      height:100%;
      object-fit:contain;
      object-position:center;
      background:#070806;
      transition:transform .45s ease;
    }
    .product-proof-card:hover img{
      transform:scale(1.018);
    }
    .product-proof-main{
      min-height:540px;
    }
    .product-proof-small{
      min-height:263px;
    }
    .product-proof-dashboard{
      grid-column:1 / -1;
      min-height:390px;
      margin-top:14px;
    }
    .product-proof-caption{
      position:absolute;
      z-index:2;
      left:22px;
      right:22px;
      bottom:20px;
      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      gap:20px;
    }
    .product-proof-caption div{
      min-width:0;
    }
    .product-proof-kicker{
      display:block;
      margin-bottom:5px;
      color:#cbe63b;
      font-size:10px;
      font-weight:700;
      letter-spacing:.14em;
      text-transform:uppercase;
    }
    .product-proof-caption strong{
      display:block;
      font:700 clamp(16px,1.8vw,23px) "Space Grotesk",sans-serif;
      letter-spacing:-.025em;
      color:#f4f5ed;
    }
    .product-proof-caption small{
      display:block;
      margin-top:4px;
      color:#aeb29d;
      font-size:12px;
    }
    .product-proof-live{
      flex:0 0 auto;
      border:1px solid rgba(203,230,59,.35);
      border-radius:999px;
      padding:7px 10px;
      color:#cbe63b;
      background:rgba(10,12,4,.75);
      font-size:9px;
      font-weight:700;
      letter-spacing:.12em;
      text-transform:uppercase;
      backdrop-filter:blur(10px);
    }
    .product-proof-dashboard .product-proof-caption{
      max-width:620px;
    }
    #product .feature-grid{
      margin-top:0;
    }
    @media(max-width:980px){
      .product-proof-grid{
        grid-template-columns:1fr;
      }
      .product-proof-stack{
        grid-template-columns:1fr 1fr;
      }
      .product-proof-main{
        min-height:500px;
      }
      .product-proof-dashboard{
        grid-column:auto;
        min-height:330px;
      }
    }
    @media(max-width:720px){
      .product-proof{
        margin-bottom:48px;
      }
      .product-proof-intro{
        align-items:flex-start;
        flex-direction:column;
        gap:10px;
      }
      .product-proof-stack{
        grid-template-columns:1fr;
      }
      .product-proof-main,
      .product-proof-small,
      .product-proof-dashboard{
        min-height:430px;
      }
      .product-proof-caption{
        left:17px;
        right:17px;
        bottom:16px;
      }
    }
  `;
  document.head.appendChild(proofStyles);

  const proof = document.createElement('div');
  proof.className = 'product-proof';
  proof.innerHTML = `
    <div class="product-proof-intro reveal">
      <div>
        <span class="section-kicker">BUILT PRODUCT</span>
        <h3>One network. Two sides of the business.</h3>
      </div>
      <p>Members discover people and experiences. Operators see the engagement, attendance and conversion signals behind the community.</p>
    </div>

    <div class="product-proof-grid">
      <figure class="product-proof-card product-proof-main reveal">
        <img src="assets/product/event-detail.webp" alt="ASTR event discovery experience showing a recurring Winnipeg fitness event" loading="lazy" />
        <figcaption class="product-proof-caption">
          <div>
            <span class="product-proof-kicker">Member experience</span>
            <strong>Discover what’s happening.</strong>
            <small>Local events, recurring sessions and RSVP.</small>
          </div>
          <span class="product-proof-live">Live MVP</span>
        </figcaption>
      </figure>

      <div class="product-proof-stack">
        <figure class="product-proof-card product-proof-small reveal">
          <img src="assets/product/members-discovery.webp" alt="ASTR members discovery experience" loading="lazy" />
          <figcaption class="product-proof-caption">
            <div>
              <span class="product-proof-kicker">Member network</span>
              <strong>Find your crew.</strong>
            </div>
          </figcaption>
        </figure>

        <figure class="product-proof-card product-proof-small reveal">
          <img src="assets/product/member-profile.webp" alt="ASTR member profile showing shared interests and training preferences" loading="lazy" />
          <figcaption class="product-proof-caption">
            <div>
              <span class="product-proof-kicker">Member identity</span>
              <strong>Match on how you move.</strong>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>

    <figure class="product-proof-card product-proof-dashboard reveal">
      <img src="assets/product/gym-dashboard.webp" alt="ASTR gym partner dashboard showing demo community engagement and conversion metrics" loading="lazy" />
      <figcaption class="product-proof-caption">
        <div>
          <span class="product-proof-kicker">Operator intelligence</span>
          <strong>Community that becomes measurable.</strong>
          <small>Demo dashboard: verified members, attendance, repeat engagement, connections and gym ROI signals.</small>
        </div>
        <span class="product-proof-live">Demo data</span>
      </figcaption>
    </figure>
  `;

  productHeading.insertAdjacentElement('afterend', proof);
  proof.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
