      const demos = [
        {
          id: 'circle',
          name: '1. Circle Loader 🟢',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <circle cx="100" cy="100" r="80"></circle>\n</svg>`,
          element: `<div class="absolute top-0 left-0 w-6 h-6 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] offset-path-[circle(80px_at_100px_100px)] animate-motion"></div>`
        },
        {
          id: 'rect',
          name: '2. Rectangle 🟦',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <rect x="20" y="40" width="160" height="120" rx="20"></rect>\n</svg>`,
          element: `<div class="absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.6)] offset-path-[xywh(20px_40px_160px_120px_round_20px)] animate-motion-alternate"></div>`
        },
        {
          id: 'curve',
          name: '3. SVG Path 〰️',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <path d="M 20,100 C 60,20 140,20 180,100"></path>\n</svg>`,
          element: `<div class="absolute top-0 left-0 w-6 h-6 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] offset-path-[path('M_20,100_C_60,20_140,20_180,100')] animate-motion-bounce"></div>`
        },
        {
          id: 'infinity',
          name: '4. Infinity ♾️',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <path d="M 100,100 C 40,40 40,160 100,100 C 160,40 160,160 100,100 Z"></path>\n</svg>`,
          element: `<div class="absolute top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] offset-path-[path('M_100,100_C_40,40_40,160_100,100_C_160,40_160,160_100,100_Z')] animate-motion"></div>`
        },
        {
          id: 'heart',
          name: '5. Heart ❤️',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <path d="M 100,60 C 100,20 40,20 40,60 C 40,100 100,160 100,160 C 100,160 160,100 160,60 C 160,20 100,20 100,60 Z"></path>\n</svg>`,
          element: `<div class="absolute top-0 left-0 w-5 h-5 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] offset-path-[path('M_100,60_C_100,20_40,20_40,60_C_40,100_100,160_100,160_C_100,160_160,100,160,60_C_160,20_100,20_100,60_Z')] animate-motion-alternate"></div>`
        },
        {
          id: 'car',
          name: '6. Car on Road 🚗',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <path d="M 20,180 C 60,60 140,60 180,180"></path>\n</svg>`,
          element: `<div class="absolute top-0 left-0 text-2xl offset-path-[path('M_20,180_C_60,60_140,60_180,180')] offset-rotate-auto animate-motion-alternate flex items-center justify-center w-6 h-6">🚗</div>`
        },
        {
          id: 'rocket',
          name: '7. Rocket 🚀',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <path d="M 20,180 Q 100,100 180,20"></path>\n</svg>`,
          element: `<div class="absolute top-0 left-0 text-2xl offset-path-[path('M_20,180_Q_100,100_180,20')] offset-rotate-auto animate-motion-reverse flex items-center justify-center w-6 h-6 ">🚀</div>`
        },
        {
          id: 'plane',
          name: '8. Plane ✈️',
          svg: `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[2px] stroke-dashed fill-none" viewBox="0 0 200 200">\n  <ellipse cx="100" cy="100" rx="80" ry="40"></ellipse>\n</svg>`,
          element: `<div class="absolute top-0 left-0 text-2xl offset-path-[ellipse(80px_40px_at_100px_100px)] offset-rotate-reverse offset-distance-25 flex items-center justify-center w-6 h-6 ">✈️</div>`
        },
        {
          id: 'custom',
          name: '9. Custom Shape ✨',
          isCustom: true
        }
      ];

      const menuEl = document.getElementById('menu');
      const previewEl = document.getElementById('preview');
      const codeOutput = document.getElementById('code-output');
      const customPanel = document.getElementById('custom-panel');
      const currentTitle = document.getElementById('current-title');
      const copyBtn = document.getElementById('copy-btn');
      const copyText = document.getElementById('copy-text');
      
      const previewContainer = document.getElementById('preview-container');
      const codePanel = document.getElementById('code-panel');
      const toggleCodeBtn = document.getElementById('toggle-code-btn');
      const editCustomBtn = document.getElementById('edit-custom-btn');
      
      let currentSelection = demos[0];
      let isCodeView = false;

      // Build Menu
      demos.forEach((demo) => {
         const btn = document.createElement('button');
         btn.className = 'w-full text-left px-4 py-3 rounded-lg transition-colors font-medium text-sm flex items-center gap-3';
         btn.innerHTML = `<span>${demo.name}</span>`;
         
         btn.onclick = () => selectDemo(demo, btn);
         menuEl.appendChild(btn);
      });

      function selectDemo(demo, btnElement) {
         currentSelection = demo;
         
         // Update active state
         Array.from(menuEl.children).forEach(child => {
             child.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
             child.classList.add('text-slate-400', 'hover:bg-slate-800');
         });
         
         if (btnElement) {
             btnElement.classList.remove('text-slate-400', 'hover:bg-slate-800');
             btnElement.classList.add('bg-blue-600', 'text-white', 'shadow-lg');
         }

         currentTitle.innerText = demo.name;
         
         if (demo.isCustom) {
             customPanel.classList.remove('hidden');
             editCustomBtn.classList.remove('hidden');
             previewEl.innerHTML = '';
             codeOutput.textContent = '<!-- Custom code will appear here after generation -->';
         } else {
             customPanel.classList.add('hidden');
             editCustomBtn.classList.add('hidden');
             
             const htmlCode = 
`<div class="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col items-center">
  <h2 class="text-lg font-bold mb-6 text-slate-200">${demo.name}</h2>
  <div class="relative w-[200px] h-[200px] flex items-center justify-center">
    ${demo.svg}
    ${demo.element}
  </div>
</div>`;

             const outputCode = 
`<div class="relative w-[200px] h-[200px] flex items-center justify-center">
    ${demo.svg}
    ${demo.element}
</div>`;
             
             previewEl.innerHTML = htmlCode;
             codeOutput.textContent = outputCode;
         }
         
         // Reset to preview view on changing demo
         if (isCodeView) toggleCodeView();
         
         // Add simple animation effect when swapping
         previewEl.classList.remove('scale-150', 'opacity-0');
         void previewEl.offsetWidth; // trigger reflow
         previewEl.classList.add('scale-100', 'opacity-100');
      }

      function toggleCodeView() {
          isCodeView = !isCodeView;
          if (isCodeView) {
              previewContainer.classList.add('hidden');
              codePanel.classList.remove('hidden');
              toggleCodeBtn.textContent = 'Show Animation';
              toggleCodeBtn.classList.replace('bg-blue-600', 'bg-purple-600');
              toggleCodeBtn.classList.replace('hover:bg-blue-500', 'hover:bg-purple-500');
          } else {
              previewContainer.classList.remove('hidden');
              codePanel.classList.add('hidden');
              toggleCodeBtn.textContent = 'Show Code';
              toggleCodeBtn.classList.replace('bg-purple-600', 'bg-blue-600');
              toggleCodeBtn.classList.replace('hover:bg-purple-500', 'hover:bg-blue-500');
          }
      }

      toggleCodeBtn.onclick = toggleCodeView;
      
      editCustomBtn.onclick = () => {
          if (isCodeView) toggleCodeView();
          customPanel.classList.remove('hidden');
      };

      // Initialize first item
      selectDemo(demos[0], menuEl.children[0]);

      // Custom Path Generator
      function updateCustomPreview(hidePanel, showAlert) {
          const svgInput = document.getElementById('custom-svg-input').value.trim();
          if (!svgInput) return;
          
          // Extract viewBox
          let viewBox = '0 0 200 200';
          const vbMatch = svgInput.match(/viewBox=["'](.*?)["']/i);
          if (vbMatch && vbMatch[1]) {
              viewBox = vbMatch[1];
          }
          
          // Extract ALL path d attributes and combine them
          const pathMatches = [...svgInput.matchAll(/<path[^>]*d=["'](.*?)["']/gi)];
          if (pathMatches.length === 0) {
              if (showAlert) {
                  alert("Could not find a <path d='...'> in the pasted SVG. Try converting your shapes (like <circle>, <rect>) to <path> first.");
                  customPanel.classList.remove('hidden');
              }
              return;
          }
          
          // Combine all path 'd' strings into one giant path
          const pathStr = pathMatches.map(m => m[1]).join(' ');
          
          // Hide panel after generating if requested
          if (hidePanel) {
              customPanel.classList.add('hidden');
          }
          
          // Replace spaces with underscores for Tailwind arbitrary value
          const underscoredPath = pathStr.replace(/ /g, '_');
          
          const svgCode = `<svg class="absolute top-0 left-0 w-full h-full stroke-slate-700 stroke-[4px] stroke-dashed fill-none" viewBox="${viewBox}">\n    <path d="${pathStr}"></path>\n  </svg>`;
          
          // Generate code for Output (pure Tailwind classes as requested by user)
          let outputElementCode = "";
          // Generate code for Live Preview (using inline styles to bypass Tailwind JIT compilation limits in browser)
          let previewElementCode = "";
          
          const vbParts = viewBox.split(/[ ,]+/);
          if (vbParts.length >= 4) {
             const minX = parseFloat(vbParts[0]);
             const minY = parseFloat(vbParts[1]);
             const width = parseFloat(vbParts[2]) || 200;
             const height = parseFloat(vbParts[3]) || 200;
             
             const maxDim = Math.max(width, height);
             const scale = (200 / maxDim).toFixed(6);
             const translateX = -minX;
             const translateY = -minY;
             
             // Pure Tailwind output
             let twWrapperClasses = `absolute top-0 left-0 origin-top-left w-[${width}px] h-[${height}px] scale-[${scale}]`;
             if (translateX !== 0) twWrapperClasses += ` translate-x-[${translateX}px]`;
             if (translateY !== 0) twWrapperClasses += ` translate-y-[${translateY}px]`;
             
             outputElementCode = `\n    <!-- Scaling wrapper to align the CSS path coordinates with the SVG viewBox -->\n    <div class="${twWrapperClasses}">\n      <div class="absolute top-0 left-0 w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,1)] animate-motion-slow offset-path-[path('${underscoredPath}')]"></div>\n    </div>`;
             
             // Inline styles for live preview
             previewElementCode = `\n    <!-- Scaling wrapper to align the CSS path coordinates with the SVG viewBox -->\n    <div class="absolute top-0 left-0 origin-top-left" style="width: ${width}px; height: ${height}px; transform: scale(${scale}) translate(${translateX}px, ${translateY}px);">\n      <div class="absolute top-0 left-0 w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,1)] animate-motion-slow" style="offset-path: path('${pathStr}');"></div>\n    </div>`;
          } else {
             outputElementCode = `\n    <div class="absolute top-0 left-0 w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)] animate-motion-slow offset-path-[path('${underscoredPath}')]"></div>`;
             previewElementCode = `\n    <div class="absolute top-0 left-0 w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)] animate-motion-slow" style="offset-path: path('${pathStr}');"></div>`;
          }
          
          const previewHtml = 
`<div class="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col items-center">
  <h2 class="text-lg font-bold mb-6 text-slate-200">Custom Shape ✨</h2>
  <div class="relative w-[200px] h-[200px] flex items-center justify-center">
    ${svgCode}${previewElementCode}
  </div>
</div>`;

          const outputHtml = 
`<div class="relative w-[200px] h-[200px] flex items-center justify-center">
  ${svgCode}${outputElementCode}
</div>`;
          
          previewEl.innerHTML = previewHtml;
          codeOutput.textContent = outputHtml;
      }

      document.getElementById('custom-svg-input').addEventListener('input', () => updateCustomPreview(false, false));
      document.getElementById('generate-btn').onclick = () => updateCustomPreview(true, true);

      // Copy Button
      copyBtn.onclick = () => {
          navigator.clipboard.writeText(codeOutput.textContent).then(() => {
              copyText.textContent = 'Copied!';
              copyBtn.classList.replace('bg-slate-800', 'bg-green-600');
              copyBtn.classList.replace('text-slate-200', 'text-white');
              setTimeout(() => {
                  copyText.textContent = 'Copy HTML';
                  copyBtn.classList.replace('bg-green-600', 'bg-slate-800');
                  copyBtn.classList.replace('text-white', 'text-slate-200');
              }, 2000);
          });
      };
