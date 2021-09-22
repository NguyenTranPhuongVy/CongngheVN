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

            //validate
            productValidate: {
                name: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập tên sản phẩm', 
                        trigger: 'change' 
                    },
                    { 
                        max: 200, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'change' 
                    }
                ],
                code: [
                    { 
                        max: 10, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'change' 
                    }
                ],
                describe: [
                    { 
                        max: 500, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'change' 
                    }
                ]
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
            },

            multipleSelection: [],
            activeName: 'all',
            search: '',
            valueAction: '',
            valueCategory: '',
            dialogFormCreateProduct: false,
            num: 1,
            labelposition: 'top',
        }
    },
    mounted() {
        
    },
    methods: {

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

        clickBtnCreate() {
            let that = this
            that.dialogFormCreateProduct = true;
            that.title = "Thêm Sản Phẩm";
        },

        handleChangeView(value) {
            console.log(value)
        },

        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }

    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')