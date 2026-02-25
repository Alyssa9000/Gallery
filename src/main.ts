import './style.css'

// ===== Tech Stack Data =====
const techCategories = [
  {
    name: 'AI & LLM',
    color: '#a855f7',
    items: ['Gemini API', 'Prompt Engineering', 'Structured Output', 'CEFR 分级策略']
  },
  {
    name: '前端框架',
    color: '#4f8eff',
    items: ['React', 'TypeScript', 'Vite', 'esbuild']
  },
  {
    name: '浏览器扩展',
    color: '#22d3ee',
    items: ['Chrome MV3', 'Content Script', 'Side Panel API', 'chrome.storage']
  },
  {
    name: '桌面插件',
    color: '#34d399',
    items: ['Obsidian Plugin API', 'DOM 事件系统', 'Web Speech API']
  },
  {
    name: '数据处理',
    color: '#fb923c',
    items: ['Web Scraping', 'HTML 解析', 'JSON Streaming', '多源降级策略']
  },
  {
    name: '工程化',
    color: '#f472b6',
    items: ['模块化架构', 'CSS 变量系统', 'Markdown 导出', '容错与兜底']
  }
]

// ===== Render Tech Grid =====
function renderTechGrid() {
  const grid = document.getElementById('tech-grid')
  if (!grid) return

  grid.innerHTML = techCategories.map(cat => `
    <div class="tech-category">
      <div class="tech-category-name">
        <span class="tech-category-dot" style="background: ${cat.color}"></span>
        <span style="color: ${cat.color}">${cat.name}</span>
      </div>
      <div class="tech-category-items">
        ${cat.items.map(item => `<span class="tech-item">${item}</span>`).join('')}
      </div>
    </div>
  `).join('')
}

// ===== Scroll Animations (Intersection Observer) =====
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
}

// ===== Navbar scroll effect =====
function setupNavScroll() {
  const nav = document.getElementById('main-nav')
  if (!nav) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  })
}

// ===== Smooth scroll for nav links =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const href = (anchor as HTMLAnchorElement).getAttribute('href')
      if (!href) return

      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const target = document.querySelector(href)
      if (target) {
        const navHeight = 64
        const y = target.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    })
  })
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  renderTechGrid()
  setupScrollAnimations()
  setupNavScroll()
  setupSmoothScroll()
})
