Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [
                {
                    code: 'BPMAU-01',
                    name: 'Bàn phím màu chất lượng',
                    image: 'https://www.anphatpc.com.vn/media/news/1308_Cyberborad.jpg',
                    category: 'Máy Tính',
                    price: '40.000 vnđ',
                    view: '20',
                    describe: 'Bàn phím cơ Rapoo Gaming V806 LED RGB được thiết kế và sản xuất bởi hãng Rapoo – công ty chuyên về thiết kế, phát triển và sản xuất các thiết bị ngoại vi như chuột, bàn phím, tai nghe chuyên dùng cho gaming đang được các game thủ Việt Nam ưa chuộng trong thời gian gần đây.',
                    content: 'Công tắc phím cơ Omron quá quen thuộc với các sản phẩm Logitech nay đã song hành cùng Bàn phím cơ Rapoo Gaming V806. Với tuổi thọ một phím lên tới 70 triệu lượt nhấn, rất bền và đáng tin cậy trong trò chơi. Thiết kế không xung đột cho 104 phím trên bàn phím, cho phép bạn nhấn đồng thời bất kỳ số lượng phím nào và đảm bảo rằng mọi lệnh của bạn được đăng ký và thực hiện chính xác và nhanh chóng.',
                    dateCreate: '21/09/2021 lúc 2:26',
                    dateModified: '21/09/2021 lúc 2:26',
                    userCreate: 'tanhuynh',
                    userModified: 'tanhuynh',
                    active: true,
                    bin: false,
                    follow: false,
                    note: false
                }, 
                {
                    code: 'BPCO-2',
                    name: 'Bàn phím cơ và chất lượng',
                    image: 'https://www.anphatpc.com.vn/media/news/1308_Cyberborad.jpg',
                    category: 'Máy Tính',
                    price: '40.000 vnđ',
                    view: '20',
                    describe: 'Bàn phím cơ Rapoo Gaming V806 LED RGB được thiết kế và sản xuất bởi hãng Rapoo – công ty chuyên về thiết kế, phát triển và sản xuất các thiết bị ngoại vi như chuột, bàn phím, tai nghe chuyên dùng cho gaming đang được các game thủ Việt Nam ưa chuộng trong thời gian gần đây.',
                    content: 'Công tắc phím cơ Omron quá quen thuộc với các sản phẩm Logitech nay đã song hành cùng Bàn phím cơ Rapoo Gaming V806. Với tuổi thọ một phím lên tới 70 triệu lượt nhấn, rất bền và đáng tin cậy trong trò chơi. Thiết kế không xung đột cho 104 phím trên bàn phím, cho phép bạn nhấn đồng thời bất kỳ số lượng phím nào và đảm bảo rằng mọi lệnh của bạn được đăng ký và thực hiện chính xác và nhanh chóng.',
                    dateCreate: '21/09/2021 lúc 2:26',
                    dateModified: '21/09/2021 lúc 2:26',
                    userCreate: 'tanhuynh',
                    userModified: 'tanhuynh',
                    active: false,
                    bin: true,
                    follow: true,
                    note: true
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

            settingForm: {
                bgcolor: false,
                bgcolorMain: '',
                fonts: ''   
            },

            settingPassForm: {
                btn: [],
                userAccess: [],
                userEditPassword: [],
                password: '',
                resPassword: ''
            },

            noteForm: {
                content: '',
                status: 'Bình Thường',
                title: '',
                date: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
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

            settingValidate: {

            },

            settingPassValidate: {
                password: [
                    { 
                        max: 35, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    }
                ],
                respassword: [
                    { 
                        max: 35, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    }
                ],
            },

            noteValidate: {
                title: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập tiêu đề', 
                        trigger: 'blur' 
                    }
                ],
                content: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập nội dung', 
                        trigger: 'blur' 
                    }
                ],
            },


            listData: {

                tableHistory: [
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                ],

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
                        name: 'attention',
                        label: 'Chú ý'
                    }, 
                    {
                        name: 'trash',
                        label: 'Thùng rác'
                    }
                ],

                tabsHistory: [
                    {
                        name: 'allHis',
                        label: 'Tổng Lịch Sử',
                    }, 
                    {
                        name: 'accessHis',
                        label: 'Lịch Sử Truy Cập'
                    }, 
                    {
                        name: 'hisChange',
                        label: 'Lịch Sử Thay Đổi'
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

                optionsFunction: [
                    {
                        label: 'Thêm sản phẩm',
                        value: '1',
                    },
                    {
                        label: 'Thêm API',
                        value: '2',
                    },
                    {
                        label: 'Thêm tải lên',
                        value: '3',
                    },
                    {
                        label: 'Cài đặt',
                        value: '4',
                    },
                    {
                        label: 'Cài đặt giao diện',
                        value: '5',
                    },
                    {
                        label: 'Cài đặt mật khẩu',
                        value: '6',
                    }
                ],

                optionsUser: [
                    {
                        value: 'tan.hm',
                        label: 'tan.hm',
                    }
                ],


                optionsFont: [
                    {
                        value: '1',
                        label: 'Vn Book Atiqua'
                    },
                    {
                        value: '2',
                        label: 'Vn Arabia'
                    },
                    {
                        value: '3',
                        label: 'Vn HelvetIns'
                    },
                    {
                        value: '4',
                        label: 'Vn Lincoln'
                    },
                    {
                        value: '5',
                        label: 'Vn Teknical'
                    },
                    {
                        value: '6',
                        label: 'Vn Tifany'
                    },
                    {
                        value: '7',
                        label: 'Vn Koala'
                    }
                ],

                // radio
                radioStatus: [
                    {
                        label: 'Rất Quan Trọng',
                        name: 'veryimportant'
                    },
                    {
                        label: 'Quan Trọng',
                        name: 'important'
                    },
                    {
                        label: 'Bình Thường',
                        name: 'normal'
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

                //Timeline
                        
                timelineHistory: [
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    }, 
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    }, 
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    },
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    },
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    }
                ],
            },

            multipleSelection: [],
            activeName: 'all',
            activeSetting: 'display',
            activeDetail: 'info',
            activeHis: 'allHis',
            search: '',
            valueAction: '',
            valueCategory: '',
            dialogFormCreateProduct: false,
            dialogFormEditProduct: false,
            dialogFormDetailProduct: false,
            dialogFormNoteProduct: false,
            num: 1,
            labelposition: 'top',
            isCreate: false,
            isCreateAPI: false,
            isSettingForm: false,
            isEditForm: false,
            isDisplayEdit: false,
            loadingForm: false, 
            loadingTable: false,
            activeCollapse: ['1', '2', '3'],
            progress: 0,
            isProgressCreateAPI: false,
            reverseHistory: true,
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

        //Đổi màu
        changeBg(settingForm) {
            if(this.settingForm.bgcolor)
            {
                this.bg = "lightslategray";
            }
            else
            {
                this.bg = "#FFF";
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
            that.isSettingForm = false;
            that.isEditForm = false;
            that.isDisplayEdit = false;
            that.textcolor = '';
            that.bgcolor = '';
            that.textAPIcolor = '';
            that.bgAPIcolor = '';
            that.textSettingcolor = '';
            that.bgSettingcolor = '';
            that.textEditcolor = '';
            that.bgEditcolor = '';
            that.textSettingEditcolor = '';
            that.bgSettingEditcolor = '';
        },

        //Thao tác click form
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

        clickBtnEdit(row) {
            let that = this;
            this.cleanForm();
            that.dialogFormEditProduct = true;
            that.isEditForm = true;
            that.productForm = JSON.parse(JSON.stringify(row));
            that.title = "Sửa Sản Phẩm - " + row.name;
            that.textEditcolor = "#fff";
            that.bgEditcolor = "#909399";
            this.setTimeoutLoading();
        },

        clickBtnDisplayEdit () {
            let that = this;
            this.cleanForm();
            that.dialogFormEditProduct = true;
            that.isDisplayEdit = true;
            that.productForm = JSON.parse(JSON.stringify(row));
            that.title = "Cài Đặt Sản Phẩm - " + row.name;
            that.textSettingEditcolor = "#fff";
            that.bgSettingEditcolor = "#909399";
            this.setTimeoutLoading();
        },

        clickBtnDetail(row) {
            let that = this;
            that.dialogFormDetailProduct = true;
            that.productForm = JSON.parse(JSON.stringify(row));
            that.title = "Chi Tiết Sản Phẩm - " + row.name;

            that.code = row.code;
            that.name = row.name;
            that.image = row.image;
            that.category = row.category;
            that.price = row.price;
            that.view = row.view;
            that.describe = row.describe;
            that.content = row.content;
            that.dateCreate = row.dateCreate;
            that.dateModified = row.dateModified;
            that.userCreate = row.userCreate;
            that.userModified = row.userModified;
            that.active = row.active;
            that.bin = row.bin;
            that.follow = row.follow;
            that.note = row.note;
            
            this.setTimeoutLoading();

            that.activeText = row.active ? 'Hoạt Động' : 'Không Hoạt Động';
            that.activeColor = row.active ? 'success' : 'default';

            that.followText = row.follow ? 'Theo Dõi' : 'Không Có Theo Dõi';
            that.followColor = row.follow ? 'success' : 'default';

            that.noteText = row.note ? 'Chú Ý' : 'Không Chú Ý';
            that.noteColor = row.note ? 'warning' : 'default';

            that.binText = row.bin ? 'Yes' : 'No';
            that.binColor = row.bin ? 'danger' : 'default';
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

        clickBtnSettingForm() {
            let that = this;
            this.cleanForm();
            that.dialogFormCreateProduct = true;
            that.isSettingForm = true;
            that.title = "Cài Đặt";  
            that.textSettingcolor = "#fff";
            that.bgSettingcolor = "#909399";
            this.setTimeoutLoading();
        },

        clickBtnFollow () {
            
        },
        
        clickBtnNote (row) {
            let that = this;
            that.dialogFormNoteProduct = true;
            that.title = "Thêm Ghi Chú Sản Phẩm - " + row.name;
            this.setTimeoutLoading();
        },

        clickBtnDelete(row) {
            const that = this;
            that.$confirm('Bạn Muốn Xoá Sản Phẩm - '+ row.name +' ?', 'Thông Báo', {
                confirmButtonText: 'Xác Nhận',
                cancelButtonText: 'Huỷ Bỏ',
                type: 'warning',
                center: true
                }).then(() => {
                this.$notify({
                    title: 'Success',
                    message: 'This is a success message',
                    type: 'success'
                });
                }).catch(() => {
                this.$notify.error({
                    title: 'Error',
                    message: 'This is an error message'
                });
            });
        },


        //Thao tác form

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


        createAPIProduct(createAPIForm) {
            let that = this;
            that.isProgressCreateAPI = true;
            that.loadingTable = true;
            that.$refs[createAPIForm].validate((valid) => {
                if (valid) {
                    console.log(this.createAPIForm);
                    // $.ajax({
                    //     url: this.createAPIForm.link,
                    //     type: "GET",
                    //     dataType: 'json',
                    //     async: true,
                    //     contentType: 'application/json; charset=UTF-8',
                    //     success: function (rs) {
                    //         var data = JSON.parse(JSON.stringify(rs))

                    //         data.forEach((item, index) => {
                    //             setTimeout(function(){
                    //                 that.progress = index + 1;
                    //                 that.listData.indexTableAPI.push(item);
                    //             }, 1000);
                    //         })
                    //         that.loadingTable = false;
                    //     },
                    //     error: function (xhr, status, err) { }
                    // });
                    axios.get(this.createAPIForm.link)
                    .then(function (response) {
                            // handle success
                            console.log(response.data);
                            setTimeout(function(){
                                that.listData.indexTableAPI = response.data;
                                that.progress = that.listData.indexTableAPI.length;
                            }, 1000);
                            that.loadingTable = false;
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .then(function () {
                            // always executed
                        });
                } else {
                    console.log('error submit!!');
                return false;
                }
            });
        },

        createSettingPass(settingPassForm) {
            alert('Xác Nhận Thành Công');
        },

        createNoteProduct(noteForm) {
            let that = this;
            that.$refs[noteForm].validate((valid) => {
                if (valid) {
                    console.log(this.noteForm);
                    this.$notify({
                        title: 'Thông Báo',
                        message: 'Thêm Ghi Chú Thành Công',
                        type: 'success'
                    });
                } else {
                    console.log('error submit!!');
                    this.$notify.error({
                        title: 'Thông Báo',
                        message: 'Chưa Có Ghi Chú Nào Được Thêm'
                    });
                return false;
                }
            });
        },

        //handleClick
        handleClickDetails() {
            let that = this;
            that.activeHis = 'allHis';
            if(that.activeDetail == 'history')
            {
                that.titlelabel = "Tổng Lịch Sử";
            }
            else
            {
                console.log("Lỗi!!!!");
            }
        },

        handleClickHistory() {
            let that = this;
            if(that.activeHis == 'accessHis')
            {
                that.titlelabel = "Lịch Sử Truy Cập";
            }
            else if(that.activeHis == 'hisChange')
            {
                that.titlelabel = "Lịch Sử Thay Đối";
            }
            else if(that.activeHis == 'allHis')
            {
                that.titlelabel = "Tổng Lịch Sử";
            }
            else
            {
                console.log("Lỗi!!!!");
            }
        },

        //SetTimeOut
        setTimeoutLoading() {
            let that = this;
            that.loadingForm = true;

            setTimeout(function(){
                that.loadingForm = false;
            }, 1000);
        },

        //remove
        removeRowAPI(index, rows) {
            rows.splice(index, 1);
        },
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')