import React from "react"
import ContentLoader from "react-content-loader"

export const MainLoader = () => (
  <ContentLoader 
    speed={2}
    width={180}
    height={409}
    viewBox="0 0 180 409"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="280" rx="10" ry="10" width="180" height="20" /> 
    <rect x="0" y="0" rx="20" ry="20" width="180" height="260" /> 
    <rect x="0" y="325" rx="10" ry="10" width="180" height="18" /> 
    <rect x="0" y="353" rx="10" ry="10" width="180" height="18" />
  </ContentLoader>
)

