import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

export default function Header() {
    return (
        <div>
            <Layout>
                <Jumbotron style={{ margin: '2rem', backgroundColor: 'white' }} className="text-center">
                    <h1>welcome to Admin Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                    vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                    Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
                    faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
                    Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
                    Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus,
                    non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
                    </p>
                </Jumbotron>
            </Layout>
        </div>
    )
}
