/**
 * Informaci�n de animiaci�n de un esqueleto
 *
 * @author Matias Leone
 */
 
/**
 * Atributos
 */
TgcSkeletalAnimationData.prototype = {
	/**
     * @type String
     */
    name: undefined,
	
	/**
     * @type int
     */
    bonesCount: undefined,

	/**
     * @type int
     */
    framesCount: undefined,
	
	/**
     * @type int
     */
    frameRate: undefined,
	
	/**
     * @type int
     */
    startFrame: undefined,
	
	/**
     * @type int
     */
    endFrame: undefined,
	
	/**
	 * Frames para cada Bone
     * @type Array<TgcSkeletalAnimationBoneData>
     */
    bonesFrames: undefined,

	/**
	 * BoundingBox para esta animaci�n
     * @type Array<float>[3]
     */
    pMin: undefined,
	
	/**
	 * BoundingBox para esta animaci�n
     * @type Array<float>[3]
     */
    pMax: undefined,

}
	
 
 
/**
 * Constructor
 */
function TgcSkeletalAnimationData () {

}




