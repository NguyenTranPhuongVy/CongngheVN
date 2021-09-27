Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [
                {
                    code: 'BP-1',
                    name: 'Bàn phím đẹp và chất lượng',
                    image: 'https://www.anphatpc.com.vn/media/news/1308_Cyberborad.jpg',
                    category: 'Dụng cụ máy tính',
                    price: '40.000 vnđ',
                    view: '20',
                    describe: 'Bàn phím cơ Rapoo Gaming V806 LED RGB được thiết kế và sản xuất bởi hãng Rapoo – công ty chuyên về thiết kế, phát triển và sản xuất các thiết bị ngoại vi như chuột, bàn phím, tai nghe chuyên dùng cho gaming đang được các game thủ Việt Nam ưa chuộng trong thời gian gần đây.',
                    content: 'Công tắc phím cơ Omron quá quen thuộc với các sản phẩm Logitech nay đã song hành cùng Bàn phím cơ Rapoo Gaming V806. Với tuổi thọ một phím lên tới 70 triệu lượt nhấn, rất bền và đáng tin cậy trong trò chơi. Thiết kế không xung đột cho 104 phím trên bàn phím, cho phép bạn nhấn đồng thời bất kỳ số lượng phím nào và đảm bảo rằng mọi lệnh của bạn được đăng ký và thực hiện chính xác và nhanh chóng.',
                    datecreate: '21/09/2021 lúc 2:26',
                    datemodified: '21/09/2021 lúc 2:26',
                    usercreate: 'tanhuynh',
                    usermodified: 'tanhuynh',
                    active: true,
                    bin: false,
                    follow: false,
                    note: false
                }, 
                {
                    code: 'BP-2',
                    name: 'Bàn phím đẹp và chất lượng',
                    image: 'https://www.anphatpc.com.vn/media/news/1308_Cyberborad.jpg',
                    category: 'Dụng cụ máy tính',
                    price: '40.000 vnđ',
                    view: '20',
                    describe: 'Bàn phím cơ Rapoo Gaming V806 LED RGB được thiết kế và sản xuất bởi hãng Rapoo – công ty chuyên về thiết kế, phát triển và sản xuất các thiết bị ngoại vi như chuột, bàn phím, tai nghe chuyên dùng cho gaming đang được các game thủ Việt Nam ưa chuộng trong thời gian gần đây.',
                    content: 'Công tắc phím cơ Omron quá quen thuộc với các sản phẩm Logitech nay đã song hành cùng Bàn phím cơ Rapoo Gaming V806. Với tuổi thọ một phím lên tới 70 triệu lượt nhấn, rất bền và đáng tin cậy trong trò chơi. Thiết kế không xung đột cho 104 phím trên bàn phím, cho phép bạn nhấn đồng thời bất kỳ số lượng phím nào và đảm bảo rằng mọi lệnh của bạn được đăng ký và thực hiện chính xác và nhanh chóng.',
                    datecreate: '21/09/2021 lúc 2:26',
                    datemodified: '21/09/2021 lúc 2:26',
                    usercreate: 'tanhuynh',
                    usermodified: 'tanhuynh',
                    active: false,
                    bin: false,
                    follow: false,
                    note: false
                },
            ],


            //form
            productForm: {
                code: '',
                name: '',
                image: '',
                category: [],
                describe: '',
                content: '',
                price: '',
                view: '',
                active: true,
            },

            createAPIForm: {
                link: '',
                user: '',
                password: '',
                key: ''
            },

            //validate
            productValidate: {
                name: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập tên sản phẩm', 
                        trigger: 'blur' 
                    },
                    { 
                        max: 200, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    }
                ],
                code: [
                    {
                        max: 10, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    },
                ],
                describe: [
                    { 
                        max: 500, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    },
                ]
            },

            apiValidate: {

            },


            listData: {
                // tabs
                tabsMain: [
                    {
                        name: 'all',
                        label: 'Tất cả sản phẩm'
                    }, 
                    {
                        name: 'follow',
                        label: 'Theo dõi'
                    }, 
                    {
                        naem: 'attention',
                        label: 'Chú ý'
                    }, 
                    {
                        name: 'trash',
                        label: 'Thùng rác'
                    }
                ],
                // option
                optionsAction: [
                    {
                        value: 'all',
                        label: 'Tất cả sản phẩm'
                    }, 
                    {
                        value: 'follow',
                        label: 'Theo dõi'
                    }, 
                    {
                        value: 'attention',
                        label: 'Chú ý'
                    }, 
                    {
                        value: 'trash',
                        label: 'Thùng rác'
                    }
                ],

                optionsCategory: [
                    {
                        value: '1',
                        label: 'Máy tính'
                    }, 
                    {
                        value: '2',
                        label: 'Bàn phím'
                    }, 
                    {
                        value: '3',
                        label: 'Chuột'
                    }, 
                    {
                        value: '4',
                        label: 'Ổ cứng'
                    }
                ],

                //table

                indexTableAPI: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    },
                ],
            },

            multipleSelection: [],
            activeName: 'all',
            search: '',
            valueAction: '',
            valueCategory: '',
            dialogFormCreateProduct: false,
            num: 1,
            labelposition: 'top',
            isCreate: false,
            isCreateAPI: false,
            loadingForm: false, 
            loadingTable: false,
            activeCollapse: ['1', '2', '3'],
            progress: 0,
            isProgressCreateAPI: false,
        }
    },
    mounted() {
        
    },
    methods: {

        //Hiển Thị Ảnh
        uploadimage()
        {
            const preview = document.getElementById("myImage");
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
            }, false);
        
            if (file) {
                reader.readAsDataURL(file);
            }
        },

        //Thao tác chuyển
        handleChangeView(value) {
            console.log(value)
        },

        handleRemove(file, fileList) {
            console.log(file, fileList);
        },

        handlePreview(file) {
            console.log(file);
        },

        handleChange(val) {
            console.log(val);
        },

        //clean
        cleanForm() {
            let that = this;
            that.isCreate = false;
            that.isCreateAPI = false;
            that.textcolor = '';
            that.bgcolor = '';
            that.textAPIcolor = '';
            that.bgAPIcolor = '';
        },

        //Thao tác form
        clickBtnCreate() {
            let that = this;
            this.cleanForm();
            that.dialogFormCreateProduct = true;
            that.isCreate = true;
            that.title = "Thêm Sản Phẩm";
            that.textcolor = "#fff";
            that.bgcolor = "#909399";
            this.setTimeoutLoading();
        },

        createProduct(productForm) {
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                    console.log(this.productForm);
                } else {
                    console.log('error submit!!');
                return false;
                }
            });
        },

        clickBtnCreateAPI() {
            let that = this;
            this.cleanForm();
            that.dialogFormCreateProduct = true;
            that.isCreateAPI = true;
            that.title = "Thêm Sản Phẩm Bằng API";  
            that.textAPIcolor = "#fff";
            that.bgAPIcolor = "#909399";
            this.setTimeoutLoading();
        },

        createAPIProduct(createAPIForm) {
            let that = this;
            that.isProgressCreateAPI = true;
            that.loadingTable = true;
            that.$refs[createAPIForm].validate((valid) => {
                if (valid) {
                    console.log(this.createAPIForm);
                    $.ajax({
                        url: this.createAPIForm.link,
                        type: "GET",
                        dataType: 'json',
                        async: true,
                        contentType: 'application/json; charset=UTF-8',
                        success: function (rs) {
                            var data = JSON.parse(JSON.stringify(rs))

                            data.forEach((item, index) => {
                                setTimeout(function(){
                                    that.progress = index + 1;
                                    that.listData.indexTableAPI.push(item);
                                }, 1000);
                            })
                            that.loadingTable = false;
                        },
                        error: function (xhr, status, err) { }
                    });
                } else {
                    console.log('error submit!!');
                return false;
                }
            });
        },

        //SetTimeOut
        setTimeoutLoading() {
            let that = this;
            that.loadingForm = true;

            setTimeout(function(){
                that.loadingForm = false;
            }, 1000);
        },
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')