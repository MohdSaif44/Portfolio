import React from 'react'
import balto from '../assets/Balto.jpg'

const Styles = () => {

    return (
        <div className='bg-slate-600 py-10 px-10'>
            <div className='flex justify-between text-white'>
                <a href="#display">Display</a>
                <a href="#colors">Colors</a>
                <a href="#text">Text Styles</a>
                <a href="#width">Width & Height</a>
                <a href="#spacing">Spacing</a>
                <a href="#position">Position</a>
                <a href="#border">Borders & Rounded Corners</a>
                <a href="#images">Images & Media</a>
                <a href="#hover">Hover Effects</a>
                {/* <a href="#response">Responsiveness</a> */}
            </div>


            {/* Display - Row */}
            <div id="display" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Display - Flex Row</h1>
                <p className='text-theme'>flex-[direction(row or col)]</p>
                <p className='text-theme2 uppercase font-bold'>Displays the Children in a row</p>


                <p className='text-center my-2 bg-white text-black py-1'>Justify Start</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the Children at the start</p>
                <div className='flex flex-row justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Center</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the Children at the center</p>

                <div className='flex flex-row justify-center gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify End</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the Children at the end</p>

                <div className='flex flex-row justify-end gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Between</p>
                <p className='text-center text-theme2 uppercase font-bold'>Adds a space between the children</p>

                <div className='flex flex-row justify-between gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Around</p>
                <p className='text-center text-theme2 uppercase font-bold'>Adds a space around the children</p>

                <div className='flex flex-row justify-around gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Evenly</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children and empty spaces evenly</p>

                <div className='flex flex-row justify-evenly gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>


                {/* Display - Column */}
                <h1 className='text-4xl mb-4 font-bold'>Display - Flex Col</h1>
                <p className='text-theme2 uppercase font-bold'>Displays the Children in a column</p>

                <p className='text-center my-2 bg-white text-black py-1'>Items Start</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children at the start</p>

                <div className='items-start flex flex-col justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Items Center</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children at the center</p>

                <div className='items-center flex flex-col  justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Items End</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children at the end</p>

                <div className='items-end flex flex-col justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>
            </div>


            {/* Colors */}
            <div id="colors" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Colors</h1>
                <p className='text-theme2 uppercase font-bold'>add colors to (Text, Background, Borders, etc..)</p>
                <p className='text-theme'>bg-[color]-[degree]</p>

                <div className='bg-red-900 p-4 text-center'>Dark Red (bg-red-900)</div>
                <div className='bg-blue-900 p-4 text-center'>Dark Blue (bg-blue-900)</div>
                <div className='bg-black p-4 text-center'>Black (bg-black)</div>
                <div className='bg-white/10 p-4 text-center'>White Transparent (bg-white/10)</div>
                <div className='bg-[#05b6bc] p-4 text-center'>Custom Color (bg-[#05b6bc])</div>
                <div className='bg-theme p-4 text-center'>Theme Color (bg-theme)</div>
            </div>


            {/* Text Styles */}
            <div id="text" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Text Styles</h1>

                <p className='font-bold text-center'>Bold font-bold</p>
                <p className='italic text-center text-2xl'>Italic</p>
                <p className='underline text-center'>Underline</p>
                <p className='uppercase text-center'>uppercase</p>
                <p className='tracking-widest text-center text-2xl'>Spacing tracking-widest</p>
                <p className='text-4xl text-center'>Text 4XL text-4xl</p>
                <h1 className='text-4xl font-bold'>Text Align</h1>
                <p className='text-theme mb-4'>text-[position]</p>

                <p className='text-start font-bold bg-red-900'>Start</p>
                <p className='text-center font-bold bg-blue-900'>Center</p>
                <p className='text-end font-bold bg-green-900'>End</p>
            </div>


            {/* Width & Height */}
            <div id="width" className='my-10 bg-black/60 text-white p-4 rounded flex flex-col gap-1 justify-center'>
                <h1 className='text-4xl mb-4 font-bold'>Width & Height</h1>
                <p className='text-theme'>w-[size]</p>
                <p className='text-theme'>h-[size]</p>

                <div className='w-full bg-red-900 p-4 text-center '>Width Full (w-full)</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 100% of the parent's width</p>

                <div className='w-1/2 bg-blue-900 p-4 text-center m-auto'>Width 50% (w-1/2)</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 50% of the parent's width</p>

                <div className='w-[75%] bg-green-900 p-4 text-center m-auto'>Width 75% (w-[75%])</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 75% of the parent's width</p>

                <div className='w-64 bg-yellow-900 p-4 text-center m-auto'>Width 64 (w-64)</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 256px of the parent's width</p>

                <div className='w-fit bg-blue-900 p-4 text-center m-auto'>Width Fit (w-fit)</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>the width Fits the content inside the container</p>


                <div className='h-full bg-red-900 p-4 text-center'>Height Full - Default (h-full)</div>
                <div className='bg-green-900 p-4 text-center h-40 flex items-center justify-center'>Height 40</div>
                <div className='bg-blue-900 p-4 text-center h-screen flex items-center justify-center'>Height Screen (100vh) viewport</div>
            </div>

            {/* Spacing */}
            <div id="spacing" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Spacing</h1>
                <p className='text-center my-2 bg-white text-black py-1'>Margin</p>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Adds spacing outside the container</p>
                <p className='text-theme text-center'>m-[number]</p>


                <div className='flex flex-col gap-2 bg-gray-600'>
                    <div className="m-auto size-52 bg-red-900  flex items-center justify-center">Margin Center (m-auto)</div>
                    <div className="ml-10 size-52 bg-blue-900  flex items-center justify-center">Margin Left 10 (ml-10)</div>
                    <div className="mr-10 ml-auto size-52 bg-green-900  flex items-center text-center justify-center ">Margin Right 10 (mr-10 ml-auto)</div>
                    <div className="mt-50 size-52 bg-red-900  flex items-center justify-center">Margin Top 50 (mt-50)</div>
                    <div className="mx-auto size-52 bg-green-900 flex items-center justify-center ">Margin X axis (mx-auto)</div>
                </div>
                <p className='text-center my-2 bg-white text-black py-1'>Padding</p>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Adds spacing inside the container</p>
                <p className='text-theme text-center'>p-[number]</p>


                <div className='flex flex-col gap-2 bg-gray-600'>
                    <div className="p-10 bg-red-900  w-fit m-auto flex items-center justify-center">Padding 10 (p-10)</div>
                    <div className="pl-10 bg-blue-900 flex w-fit m-auto items-center justify-center">Padding Left 10 (pl-10)</div>
                    <div className="pr-10 bg-green-900 m-auto w-fit flex items-center justify-center">Padding Right 10 (pr-10)</div>
                    <div className="px-10 bg-red-900 m-auto w-fit flex items-center justify-center mx-auto">Padding X axis (px-auto)</div>
                    <div className="py-10 bg-blue-900 m-auto w-fit flex items-center justify-center mx-auto">Padding Y axis (py-auto)</div>
                </div>
            </div>


            {/* Position */}
            <div id="position" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Position</h1>
                <div className='bg-gray-600 relative flex flex-col gap-2 h-[200vh]'>

                    <div className='relative bg-red-900 size-32 flex justify-center items-center'>Relative - Default</div>
                    <p className=' text-theme uppercase font-bold mb-3'>Default Position to the Parent </p>

                    <div className='absolute right-0 left-0 m-auto top-10 bg-blue-900 size-32 flex justify-center items-center'>Absolute</div>
                    <p className='text-center text-theme uppercase font-bold mb-3'>Can be positioned anywhere in respect to the Parent</p>

                    <div className='sticky top-0 bg-red-900 size-32 flex justify-center items-center'>Sticky</div>
                    <p className='sticky top-0 text-theme uppercase font-bold mb-3'>Sticks to the Parent</p>

                    <div className='fixed bottom-0 bg-red-900 size-32 flex justify-center items-center'>Fixed</div>
                    <p className='text-center text-theme uppercase font-bold mb-3'>Can be positioned anywhere in respect to the Viewport - Fixed</p>

                </div>
            </div>

            {/* Border */}
            <div id="border" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Borders & Rounded Corners</h1>
                Border:<p className='text-theme'> border-[width] --- border-[color] --- border-[type]</p>
                Rounded Corners: <p className='text-theme'> rounded-[size]</p>

                <p className=' text-theme2 uppercase font-bold mb-3'>Adds borders outside the container and rounded corners</p>
                <div className='bg-gray-600 relative flex flex-col gap-2 py-2'>

                    <div className='border-3 border-white m-auto bg-red-900 size-32 flex-col justify-center text-center items-center'>
                        <p>Border Solid White - Default</p>
                        <span className="text-gray-300">(border-3 border-white)</span>
                    </div>
                    <div className='border-3 border-white border-dashed m-auto bg-green-900 size-32 flex-col justify-center text-center items-center'>
                        <p>Border Dashed White</p>
                        <span className="text-gray-300">(border-3 border-white border-dashed)</span>
                    </div>
                    <div className='border-3 border-black border-dotted m-auto bg-blue-900 size-32 flex-col justify-center text-center items-center'>
                        <p>Border Dotted Black</p>
                        <span className="text-gray-300">(border-3 border-black border-dotted)</span>
                    </div>
                    <div className='border-7 border-white m-auto bg-yellow-900 size-32 flex-col justify-center text-center items-center'>
                        <p>Border with More Width</p>
                        <span className="text-gray-300">(border-7 border-white)</span>
                    </div>
                    <div className='border-x-7 border-white m-auto bg-red-900 size-32 flex-col justify-center text-center items-center'>
                        <p>Border X Axis Only</p>
                        <span className="text-gray-300">(border-x-7 border-white)</span>
                    </div>
                    <div className='border-y-7 border-white m-auto bg-green-900 size-32 flex-col justify-center text-center items-center'>
                        <p>Border Y Axis Only</p>
                        <span className="text-gray-300">(border-y-7 border-white)</span>
                    </div>


                    {/* Rounded Corners*/}

                    <div className='rounded-xl m-auto bg-red-900 size-32 flex-col justify-center text-center items-center p-2'>
                        <p>Rounded Corners</p>
                        <span className="text-gray-300">(rounded-xl)</span>
                    </div>

                    <div className='rounded-t-xl m-auto bg-blue-900 size-32 flex-col justify-center text-center items-center p-2'>
                        <p>Rounded Top</p>
                        <span className="text-gray-300">(rounded-t-xl)</span>
                    </div>

                    <div className='rounded-br-xl m-auto bg-yellow-900 size-32 flex-col justify-center text-center items-center p-2'>
                        <p>Rounded Bottom Right</p>
                        <span className="text-gray-300">(rounded-br-xl)</span>
                    </div>

                </div>
            </div>



            {/* Images & Media */}
            <div id="images" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Images & Media</h1>
                <p className=' text-theme2 uppercase font-bold mb-3'>To be able to add external images and media </p>
                <p className='text-theme'>{`<img src=""/>`}</p>


                <div className='flex flex-col justify-center gap-3'>

                    <div>
                        <img src={balto} alt="Balto" className='m-auto w-100' />
                        <p className='text-center text-theme uppercase font-bold mb-3'>import images locally - <span className='text-theme2 lowercase'>we use src={'{import}'}</span></p>
                    </div>

                    <div>
                        <img src='https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg' alt="Pyramids" className='m-auto w-100' />
                        <p className='text-center text-theme uppercase font-bold mb-3'>import images online - <span className='text-theme2 lowercase'>we use src='Link'</span></p>
                    </div>


                    <div>
                        <img src='https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg' alt="Pyramids" className='m-auto w-50' />
                        <img src='https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg' alt="Pyramids" className='m-auto w-300' />
                        <p className='text-center text-theme uppercase font-bold mb-3'>Change the Width and Height w-size, h-size</p>
                    </div>
                </div>
            </div>

            {/* Hover */}
            <div id="hover" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Hover Effect</h1>
                <p className=' text-theme2 uppercase font-bold mb-3'>Adds Hover Effect when the mouse touches the item</p>
                <p className='text-theme'>hover:[effect]</p>

                <div className='bg-gray-600 relative flex flex-col gap-2 py-2'>

                    <div className='hover:scale-130 m-auto bg-green-900 size-32 flex flex-col justify-center text-center items-center'>
                        <p>SCALE UP</p>
                        <span className="text-gray-300">(hover:scale-130)</span>
                    </div>

                    <div className='hover:bg-red-400 m-auto bg-red-900 size-32 flex flex-col justify-center text-center items-center'>
                        <p>CHANGE COLOR</p>
                        <span className="text-gray-300">(hover:bg-red-400)</span>
                    </div>

                    <div className='hover:translate-x-30 m-auto bg-blue-900 size-32 flex flex-col justify-center text-center items-center'>
                        <p>MOVE RIGHT</p>
                        <span className="text-gray-300">(hover:translate-x-30)</span>
                    </div>

                    <div className='hover:w-full m-auto bg-yellow-900 size-32 flex flex-col justify-center text-center items-center'>
                        <p>CHANGE WIDTH</p>
                        <span className="text-gray-300">(hover:w-full)</span>
                    </div>


                    <div className='hover:w-full duration-300 m-auto bg-red-900 size-32 flex flex-col justify-center text-center items-center'>
                        <p>ADD ANIMATION</p>
                        <span className="text-gray-300">(duration-300)</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Styles