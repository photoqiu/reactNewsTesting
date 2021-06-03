/*
 * @Description:
 * @Author: ext.qiubo
 * @Date: 2021-06-03 09:30:13
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-03 11:53:30
 */
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props: number[] | any) {
    // This reference will give us direct access to the mesh
    const mesh: any = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame(() => (mesh.current.rotation.x += 0.01));
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
}

const DrawLayerOut: React.FC = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            <mesh
                visible
                userData={{ hello: 'world' }}
                position={[1, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <sphereGeometry args={[1, 26, 26]} />
                <meshStandardMaterial color="orange" transparent />
            </mesh>
        </Canvas>
    );
};

export default DrawLayerOut;
