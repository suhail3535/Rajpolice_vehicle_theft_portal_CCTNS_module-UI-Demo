import React from 'react'
import { Heading, useToast } from "@chakra-ui/react";

import "./user.css"
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";

const Humeninfo = () => {
    return (
        <>
            <div className='huminfo_div'>
                <div className='first_div'>
                    <form>
                        <div id={""}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    placeholder="Enter title.."
                                    name="title"

                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Started By-</FormLabel>
                                <Input
                                    placeholder="Enter..."
                                    name="author"

                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Category</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="category"

                                >
                                    <option value="coading">Coading</option>
                                    <option value="Dsa">Dsa</option>
                                    <option value="Csbt">Csbt</option>
                                    <option value="General">General</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Type</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="type"

                                >
                                    <option value="live">Live</option>
                                    <option value="video">Video</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Instructors</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="instructure"


                                >
                                    <option value="Yogesh Bhat">
                                        Rishav Mudgal
                                    </option>
                                    <option value="Chandra Sekhar">
                                        Chandra Sekhar
                                    </option>
                                    <option value="Pulkit">Pulkit</option>
                                    <option value="Bicky">Bicky</option>
                                    <option value="Omkar Tripathi">
                                        Omkar Tripathi
                                    </option>
                                    <option value="Harshal">Harshal</option>
                                    <option value="Divya Sheeroju">
                                        Divya Sheeroju
                                    </option>
                                    <option value="Avinash Patro">
                                        Avinash Patro
                                    </option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Optional</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="optional"
                                >
                                    <option value="no">No</option>
                                    <option value="yes">YES</option>
                                </Select>
                            </FormControl>
                        </div>


                        <div >
                            <Button >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>

                <div className='second_div'>
                    <form>
                        <div id={""}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    placeholder="Enter title.."
                                    name="title"

                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Started By-</FormLabel>
                                <Input
                                    placeholder="Enter..."
                                    name="author"

                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Category</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="category"

                                >
                                    <option value="coading">Coading</option>
                                    <option value="Dsa">Dsa</option>
                                    <option value="Csbt">Csbt</option>
                                    <option value="General">General</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Type</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="type"

                                >
                                    <option value="live">Live</option>
                                    <option value="video">Video</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Instructors</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="instructure"


                                >
                                    <option value="Yogesh Bhat">
                                        Rishav Mudgal
                                    </option>
                                    <option value="Chandra Sekhar">
                                        Chandra Sekhar
                                    </option>
                                    <option value="Pulkit">Pulkit</option>
                                    <option value="Bicky">Bicky</option>
                                    <option value="Omkar Tripathi">
                                        Omkar Tripathi
                                    </option>
                                    <option value="Harshal">Harshal</option>
                                    <option value="Divya Sheeroju">
                                        Divya Sheeroju
                                    </option>
                                    <option value="Avinash Patro">
                                        Avinash Patro
                                    </option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Optional</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="optional"
                                >
                                    <option value="no">No</option>
                                    <option value="yes">YES</option>
                                </Select>
                            </FormControl>
                        </div>


                        <div >
                            <Button >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>





            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati odio at dicta soluta error inventore aspernatur consequatur facilis temporibus nemo, doloribus atque pariatur illo dolore tempora ducimus ab amet molestiae esse! Vitae, obcaecati maxime. Mollitia nobis labore esse aliquam, libero reiciendis accusantium itaque id! Animi, illo vero eos totam mollitia, laboriosam omnis facilis magnam quod ratione corporis hic ex delectus sed tenetur error unde. Fugiat, temporibus sapiente, iusto assumenda quas laborum numquam hic illo exercitationem, doloribus ducimus iure non praesentium necessitatibus nostrum harum dicta qui quo! Distinctio error aperiam voluptate natus, tempora iusto rerum, praesentium, temporibus aliquam ipsum repellendus repellat.
        </>
    )
}

export default Humeninfo
