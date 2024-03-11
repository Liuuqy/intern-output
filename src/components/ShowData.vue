<template>
    <div>
        <el-select v-model="chooseValue" 
        filterable 
        v-el-select-loadmore="loadMore(rangeNumber)"
        :filter-method="filterMethod"
        >
            <el-option v-for="(item,index) in options.slice(0,rangeNumber)"
            :key="index"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import debounce from '../utils/debounce'
export default {
    name: "ShowData",
    components: {},
    data() {
        return {
            chooseValue:'',
            options:[],
            rangeNumber:20,
            resOptions:[]
        };
    },
    created() {},
    mounted() {},
    methods: {
        getList(){
            for(let i=0;i<25000;i++){
                this.resOptions.push({label:'选择'+i,value:'选择'+i})
            }
        },
        loadMore(){
            return ()=> (this.rangeNumber += 5)
        },
        //搜索方法
        filterMethod(filterval){
            console.log('搜索关键字为:',filterval)
            if(filterval){
                let filterArr = this.options.filter((item)=>{
                    if(item.label.includes(filterval)){
                        return item
                    }
                })
                this.options = filterArr
                // console.log(this.options)//全部合适的options
            }else{
                this.options = this.resOptions
            }
        }
    },
    beforeMount(){
        this.getList()
        debounce(this.filterMethod,300)()
    },
    directives:{
        'el-select-loadmore':(el,binding) =>{
            // console.log(el)
            const SELECTWRAP_DOM = el.querySelector(".el-select-dropdown .el-scrollbar .el-select-dropdown__wrap");
            console.log(SELECTWRAP_DOM)
            if (SELECTWRAP_DOM) {
                SELECTWRAP_DOM.addEventListener("scroll", function () {
                    /**
                     * scrollHeight 获取元素内容高度(只读)
                     * scrollTop 获取或者设置元素的偏移值,
                     *  常用于:计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
                     * clientHeight 读取元素的可见高度(只读)
                     * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
                     * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
                     */
                    //是否滚动到底部
                    const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
                    if (condition){
                        // console.log('滚动到底部')
                        binding.value();
                    }
                });
            }
        }
    }
}
</script>

<style lang='scss' scoped>

</style>