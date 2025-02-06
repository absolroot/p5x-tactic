
      /* ========== 원더 설정 ========== */
      function setupWonderConfig() {
        const wonderConfigDiv = document.getElementById("wonder-config");
        
        // 무기 입력 필드 수정
        const weaponInput = wonderConfigDiv.querySelector(".wonder-weapon-input");
        const weaponContainer = weaponInput.parentElement;
        
        // input을 컨테이너로 감싸기
        const inputContainer = document.createElement("div");
        inputContainer.className = "input-container";
        
        // 기존 input을 새 컨테이너로 이동
        weaponInput.parentNode.insertBefore(inputContainer, weaponInput);
        inputContainer.appendChild(weaponInput);
        
        // clear 버튼 추가
        const clearBtn = document.createElement("button");
        clearBtn.className = "clear-input";
        clearBtn.textContent = "×";
        clearBtn.addEventListener("click", () => {
          weaponInput.value = "";
          weaponInput.focus();
        });
        inputContainer.appendChild(clearBtn);

        const inputs = wonderConfigDiv.querySelectorAll(".wonder-persona-input");
        
        const weaponList = document.getElementById("weapon-list");
        wonderWeapons.forEach(weapon => {
          const option = document.createElement("option");
          option.value = weapon;
          weaponList.appendChild(option);
        });

        // 디바운스 함수
        const debounce = (func, wait) => {
          let timeout;
          return function executedFunction(...args) {
            const later = () => {
              clearTimeout(timeout);
              func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
          };
        };
        
        // 업데이트 함수를 디바운스 처리
        const debouncedUpdate = debounce(() => {
          updateAutoActions();
          updatePartyImages();
          renderTurns();
        }, 300);
        
        inputs.forEach((input, idx) => {
          // input을 컨테이너로 감싸기
          const inputContainer = document.createElement("div");
          inputContainer.className = "input-container";
          
          // datalist 생성
          const datalistId = `persona-list-${idx}`;
          input.setAttribute("list", datalistId);
          input.placeholder = "선택 또는 입력";
          
          const datalist = document.createElement("datalist");
          datalist.id = datalistId;
          
          // 페르소나 옵션 추가
          personaList.forEach(persona => {
            const option = document.createElement("option");
            option.value = persona;
            datalist.appendChild(option);
          });
          
          // clear 버튼 추가
          const clearBtn = document.createElement("button");
          clearBtn.className = "clear-input";
          clearBtn.textContent = "×";
          clearBtn.addEventListener("click", () => {
            input.value = "";
            wonderPersonas[idx] = "";
            debouncedUpdate();
            input.focus();
          });
          
          // 요소들을 컨테이너에 추가
          input.parentNode.insertBefore(inputContainer, input);
          inputContainer.appendChild(input);
          inputContainer.appendChild(clearBtn);
          inputContainer.parentNode.appendChild(datalist);
          
          // input 이벤트 리스너 수정
          input.addEventListener("change", (e) => {
            const oldPersona = wonderPersonas[idx];
            const newPersona = e.target.value;
            wonderPersonas[idx] = newPersona;
            
            // 턴 데이터에서 해당 페르소나 업데이트
            turns.forEach(turn => {
              turn.actions.forEach(action => {
                if (action.character === "원더" && action.wonderPersona === oldPersona) {
                  action.wonderPersona = newPersona || `페르소나${idx + 1}`;
                }
              });
            });
            
            debouncedUpdate();
          });

          // input 직접 입력 이벤트도 추가
          input.addEventListener("input", (e) => {
            const oldPersona = wonderPersonas[idx];
            const newPersona = e.target.value;
            wonderPersonas[idx] = newPersona;
            
            // 턴 데이터에서 해당 페르소나 업데이트
            turns.forEach(turn => {
              turn.actions.forEach(action => {
                if (action.character === "원더" && action.wonderPersona === oldPersona) {
                  action.wonderPersona = newPersona || `페르소나${idx + 1}`;
                }
              });
            });
            
            debouncedUpdate();
          });
        });

        // 무기 입력 필드 이벤트 리스너 수정
        weaponInput.addEventListener("change", (e) => {
          updatePartyImages();
        });

        weaponInput.addEventListener("input", (e) => {
          updatePartyImages();
        });
      }
      