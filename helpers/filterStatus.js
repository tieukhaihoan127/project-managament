module.exports = (query) => {
    // Nút bấm lọc trạng thái
    let filterStatus = [
        {
            name: "Tất cả",
            status: "",
            class:""
        },
        {
            name: "Hoạt động",
            status:"active",
            class:""
        },
        {
            name:"Dừng hoạt động",
            status:"inactive",
            class:""
        }
    ];

    // Active Button trạng thái hiện tại 
    if(query.status){
        const index = filterStatus.findIndex(item => item.status == query.status);
        filterStatus[index].class = "active";
    }
    else{
        const index = filterStatus.findIndex(item => item.status == "");
        filterStatus[index].class = "active";
    }

    return filterStatus;
};