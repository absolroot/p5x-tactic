      /* ========== 액션 행 생성 ========== */
      function createActionRow(turnIndex, actionIndex) {
        const action = turns[turnIndex].actions[actionIndex];
        const li = document.createElement("li");
        li.className = "action-item";
        li.setAttribute("data-action-index", actionIndex);
        
        // 캐릭터에 해당하는 배경색 적용
        if (action.character && characterData[action.character]) {
          li.style.backgroundColor = characterData[action.character].color + "30"; // 20은 투명도
        }
        
        // (1) 캐릭터 드롭다운
        const charSelect = document.createElement("select");
        charSelect.className = "action-character";
        
        // 드롭다운 옵션 채우기 - 현재 선택된 파티원들만 표시
        charSelect.innerHTML = '<option value="">참고사항</option>'; // 참고사항으로 변경
        const activePartyMembers = partyMembers
          .filter(member => member.name !== "") // 선택된 멤버만 필터링
          .map(member => member.name); // 이름만 추출
        
        activePartyMembers.forEach(char => {
          const opt = document.createElement("option");
          opt.value = char;
          opt.textContent = char;
          if (action.character === char) opt.selected = true;
          charSelect.appendChild(opt);
        });
        
        charSelect.addEventListener("change", e => {
          action.character = e.target.value;
          action.wonderPersona = ""; // 캐릭터 변경시 페르소나 초기화
          action.action = ""; // 액션 초기화
          renderTurns();
        });
        li.appendChild(charSelect);
        
        // (2) 원더일 경우 페르소나 선택, 아닐 경우 스킬 드롭다운으로 변경
        if (action.character === "원더") {
          const personaSelect = document.createElement("select");
          personaSelect.className = "wonder-persona-select";
          
          wonderPersonas.forEach((p, idx) => {
            const opt = document.createElement("option");
            opt.value = p;
            opt.textContent = p || `페르소나${idx + 1}`;
            if (action.wonderPersona === p) opt.selected = true;
            personaSelect.appendChild(opt);
          });
          
          personaSelect.addEventListener("change", e => {
            const newPersona = e.target.value;
            action.wonderPersona = newPersona;
    
            // 선택된 페르소나의 인덱스 찾기
            const personaIndex = wonderPersonas.indexOf(newPersona);
            if (personaIndex !== -1) {
              // 해당 페르소나의 스킬 입력값 가져오기
              const skillInputs = document.querySelectorAll(
                `.persona-skill-input[data-persona-index="${personaIndex}"]`
              );
              
              // 스킬1이 있으면 스킬1 사용, 없으면 고유스킬 사용
              const skill1Input = skillInputs[1];
              const uniqueSkillInput = skillInputs[0];
              
              // 스킬1이 있으면 스킬1을, 없으면 고유스킬을 메모에 설정
              action.memo = (skill1Input?.value || uniqueSkillInput?.value || "");
              
              // 메모 입력 필드 업데이트
              const memoInput = li.querySelector(".action-memo");
              if (memoInput) {
                memoInput.value = action.memo;
              }
            }
            
            renderTurns();
          });
          li.appendChild(personaSelect);
        } else if (action.character) {
          // 스킬 드롭다운으로 변경
          const skillSelect = document.createElement("select");
          skillSelect.className = "action-skill";
          
          // 기본 옵션 추가
          skillSelect.innerHTML = '<option value="">선택</option>';
          
          // 스킬 옵션 추가
          skillList.forEach(skill => {
            const option = document.createElement("option");
            option.value = skill;
            option.textContent = skill;
            if (action.action === skill) option.selected = true;
            skillSelect.appendChild(option);
          });
          
          skillSelect.addEventListener("change", e => {
            action.action = e.target.value;
          });
          
          li.appendChild(skillSelect);
        }
        
        // (3) 메모 입력 필드 추가
        const memoInput = document.createElement("input");
        memoInput.type = "text";
        memoInput.className = "action-memo";
        memoInput.placeholder = "세부사항";
        memoInput.value = action.memo || "";
        memoInput.addEventListener("input", e => {
          action.memo = e.target.value;
        });
        li.appendChild(memoInput);
        
        // 복제 버튼 추가
        const cloneBtn = document.createElement("button");
        cloneBtn.className = "clone-action";
        cloneBtn.innerHTML = ""; // 또는 "복제" 텍스트 사용
        cloneBtn.addEventListener("click", () => {
          const clonedAction = JSON.parse(JSON.stringify(action)); // 깊은 복사
          clonedAction.type = 'manual'; // 복제된 액션은 항상 manual로 설정
          turns[turnIndex].actions.splice(actionIndex + 1, 0, clonedAction);
          renderTurns();
        });
        
        // 삭제 버튼
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-action";
        deleteBtn.textContent = "×";
        deleteBtn.addEventListener("click", () => {
          turns[turnIndex].actions.splice(actionIndex, 1);
          renderTurns();
        });
        
        // 버튼 컨테이너 (복제 + 삭제)
        const btnContainer = document.createElement("div");
        btnContainer.className = "action-buttons";
        btnContainer.appendChild(cloneBtn);
        btnContainer.appendChild(deleteBtn);
        li.appendChild(btnContainer);
        
        return li;
      }
