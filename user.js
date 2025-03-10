const BASE_URL = 'http://localhost:8000';

window.onload = async () =>{
    await loadData()
}
const loadData = async () => {
    console.log('user page loaded');
    //1.load uer ทั้งหมด จาก api ที่เตรียมไว้
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);

    const userDOM = document.getElementById('user');
    //2.นำ user ทั้งหมด โหลดกลับเข้าไปใน html

    let htmlData = '<div>'
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i]
        htmlData += `<div>
        ${user.id} ${user.firstname} ${user.lastname} 
        <a href='idex1.html?id=${user.id}'><button>edit</button></a>
        <button class = 'delete' data-id = '${user.id}'>delete</button>
        </div>`
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData;

    //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            //ดึง if ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() //recursove funtion = เรียกใช้ฟังก์ชันเอง ตัวเอง
            }catch(error){
                console.log('error', error)
            }
        })
    }
}