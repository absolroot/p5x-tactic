      /* ========== 전체 렌더링 ========== */
      function renderTurns() {
        const turnsContainer = document.getElementById("turns");
        turnsContainer.innerHTML = "";
        
        // 턴 순서 재배열 (1-2, 3-4, 5-6 순서로)
        const turnPairs = [
          [turns[0], turns[3]], // 1-2턴
          [turns[1], turns[4]], // 3-4턴
          [turns[2], turns[5]]  // 5-6턴
        ];
        
        turnPairs.forEach(pair => {
          pair.forEach(turn => {
            const turnDiv = document.createElement("div");
            turnDiv.className = "turn-container";
            turnDiv.setAttribute("data-turn-index", turns.indexOf(turn));
            
            // 턴 헤더 컨테이너
            const headerContainer = document.createElement("div");
            headerContainer.className = "turn-header-container";
            
            // 턴 헤더
            const header = document.createElement("div");
            header.className = "turn-header";
            header.textContent = `${turn.turn}턴`;
            headerContainer.appendChild(header);
            
            // + 버튼
            const addBtn = document.createElement("button");
            addBtn.className = "add-action";
            addBtn.textContent = "+";
            addBtn.addEventListener("click", () => {
              // 해명 괴도가 설정되어 있는지 확인
              const supportMember = partyMembers.find(pm => pm.index === 4 && pm.name !== "");
              
              turn.actions.push({
                type: 'manual',
                character: supportMember ? supportMember.name : "",  // 해명 괴도가 있으면 자동으로 설정
                wonderPersona: "",
                action: "",
                memo: ""
              });
              renderTurns();
            });
            headerContainer.appendChild(addBtn);
            
            turnDiv.appendChild(headerContainer);
            
            // 액션 리스트
            const actionsList = document.createElement("ul");
            actionsList.className = "actions";
            
            turn.actions.forEach((action, aIndex) => {
              const li = createActionRow(turns.indexOf(turn), aIndex);
              actionsList.appendChild(li);
            });
            
            turnDiv.appendChild(actionsList);
            
            turnsContainer.appendChild(turnDiv);
          });
        });
        
        // (A) 턴 자체의 드래그앤드롭 (턴 순서 변경)
        Sortable.create(turnsContainer, {
          animation: 150,
          handle: ".turn-header",
          onEnd: function() {
            // 현재 화면 순서에 맞춰 turns 배열 재정렬
            const newTurnArr = [];
            const turnDivs = turnsContainer.querySelectorAll(".turn-container");
            turnDivs.forEach(div => {
              const idx = parseInt(div.getAttribute("data-turn-index"), 10);
              newTurnArr.push(turns[idx]);
            });
            // 새 순서에 맞춰 턴 번호 재할당
            newTurnArr.forEach((turn, i) => {
              turn.turn = i + 1;
            });
            turns = newTurnArr;
            renderTurns();
          }
        });
        
        // (B) 각 턴 내부 액션 리스트의 드래그앤드롭
        const actionLists = document.querySelectorAll(".actions");
        actionLists.forEach(list => {
          Sortable.create(list, {
            animation: 150,
            group: 'actions',
            onEnd: function(evt) {
              const fromTurnIndex = parseInt(evt.from.closest('.turn-container').dataset.turnIndex);
              const toTurnIndex = parseInt(evt.to.closest('.turn-container').dataset.turnIndex);
              
              // 드래그된 액션의 원본 데이터 저장
              const movedAction = {...turns[fromTurnIndex].actions[parseInt(evt.item.dataset.actionIndex)]};
              
              // 새로운 순서로 액션 배열 재구성
              const fromActions = Array.from(evt.from.children).map(item => {
                const index = parseInt(item.dataset.actionIndex);
                return index === parseInt(evt.item.dataset.actionIndex) ? movedAction : turns[fromTurnIndex].actions[index];
              });
              
              const toActions = fromTurnIndex === toTurnIndex ? fromActions : 
                Array.from(evt.to.children).map(item => {
                  const index = parseInt(item.dataset.actionIndex);
                  return item === evt.item ? movedAction : turns[toTurnIndex].actions[index];
                });
              
              turns[fromTurnIndex].actions = fromActions;
              if(fromTurnIndex !== toTurnIndex) {
                turns[toTurnIndex].actions = toActions;
              }
              
              renderTurns();
            }
          });
        });
      }
      
