const schoolSearch = document.querySelector(".search");
const searchBtn = document.querySelector(".search_window");
const school = document.querySelector(".school");
const clickedSchoolName = "";
let schoolInfo;


function schoolData() {
    const schoolName = document.querySelector(".school").value;
    const url = `https://open.neis.go.kr/hub/schoolInfo?KEY=50eecef7f1de425d8ad7fd3e8026d8ce&Type=json&pindex=1&pSize=100&SCHUL_NM=${schoolName}`;

    fetch(url).then(response => response.json()).then(json => {
        console.log(json);
        try {
            const s = json.schoolInfo[1].row;
            const a = s.filter(function (s) {
                return s.ORG_RDNMA;
            });
            const b = s.filter(function (s) {
                return s.SCHUL_NM;
            });
            const title = document.createElement('h3');
            title.setAttribute('class', 'title');
            title.innerText = schoolName;
            searchBtn.appendChild(title);
            console.log(title);
            for (let i = 0; i < s.length; i++) {
                console.log(a[i].ORG_RDNMA);
                let List = document.createElement('button');
                List.setAttribute('class', 'search_window_school');
                List.setAttribute('id', i);
                List.setAttribute('onClick', 'selectSchool(this.id)');
                List.innerText = a[i].SCHUL_NM + " - " + a[i].ORG_RDNMA;
                // List.innerText = a[i].SCHUL_NM;
                searchBtn.appendChild(List);
            }
            searchBtn.style.flexDirection = "column";
            searchBtn.style.display = "flex";
            // clickedSchoolName = a[clicked_id].SCHUL_NM;
            // console.log(clickedSchoolName);
            school.value = null;
            schoolSearch.disabled = true;
            schoolSearch.style.cursor = 'default';
            school.disabled = true;
        } catch (error) {
            alert("존재하지 않는 학교입니다");
            school.value = null;
            return;
        }
    });

}
function selectSchool(clicked_id) {
    const d = document.getElementById(clicked_id).innerText;
    const w = d.split(' ', 1);
    school.placeholder = w;
    searchBtn.style.display = "none";
}
schoolSearch.addEventListener('click', schoolData);