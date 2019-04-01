// Javascript具有自动垃圾收集机制，即执行环境会负责管理代码执行过程中使用的内存。

// 垃圾回收机制的原理：找出那些不再继续使用的变量，然后释放其占用的内存。

// 垃圾回收机制的两种策略：

// 1.标记清除   1)垃圾收集器在运行的时候给存储在内存中的所有变量都加上标记  

//                      2)去掉环境中的变量以及被环境中的变量引用的变量的标记。

//                      3)垃圾收集器完成内存清除工作，销毁那些带标记的值并回收他们所占的内存空间

// 2.引用计数：跟踪记录每个值被引用的次数

//                      1)声明了变量并将一个引用类型赋给变量时，则这个值的引用次数就是1

//                       2)如果同一个值又被赋给另一个变量，则改值加1

//                       3)如果包含对这个值引用的变量又取得另外一个值，则这个值的引用次数减1

// 引用技术出现的bug：循环引用-->对象A中包含一个指向对象B的指针，而对象B中也包含一个指向对象A的引用

function problem(){
			var A=new Object();
			var B=new Object();
			A.someOtherObject=B;
			B.anotherObject=A;
		}
// 在这个例子中A，B引用次数都是2，当函数执行完毕后，A，B将继续存在

// 解除引用：一旦数据不再有用，做好通过将其值设置为null来释放其引用；解除引用的真正作用时让值脱离执行环境，以便垃圾收集器下次将其回收
