/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'

export default function FluidNavBar() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true, antialias: true }}>
      <Bar />
    </Canvas>
  )
}

function Bar() {
  const ref = useRef<THREE.Mesh>(null!)
  const { nodes } = useGLTF('/assets/3d/bar.glb')
  const { viewport } = useThree()

  const materialProps = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25,
  }

  return (
    <mesh
      ref={ref}
      geometry={(nodes.Cube as THREE.Mesh)?.geometry}
      scale={[viewport.width * 1.2, 0.8, 1]}
      position={[0, -0.1, 14]}
      rotation-x={Math.PI / 2}
    >
      <MeshTransmissionMaterial {...materialProps} />
    </mesh>
  )
}
