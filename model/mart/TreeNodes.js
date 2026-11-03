// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree

ICONPATH = 'Support/' //change if the gif's folder is a subfolder, for example: 'images/'


USEICONS = 1

{
foldersTree = gFld("Title", "title.htm")
foldersTree.iconSrc = ICONPATH + "Gif/globe.gif"
Diag_Node = insFld(foldersTree, gFld("mart.DM1", "diagram.htm"))
Diag_Node.iconSrc = ICONPATH + "Gif/diagram.gif"
Diag_Node.iconSrcClosed = ICONPATH + "Gif/diagram.gif"
Model_Node = insFld(Diag_Node, gFld("Logical", "Content/Model_a105e6460aaa46bfa6440a6690f4ef74.htm"))
Model_Node.iconSrc = ICONPATH + "Gif/logical.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/logical.gif"
{
Submodel_42839a63116d49b9917d174083ffb39d = insFld(Model_Node, gFld("Main Model", "Content/Submodel_42839a63116d49b9917d174083ffb39d.htm"))
Submodel_42839a63116d49b9917d174083ffb39d.iconSrc = ICONPATH + "Gif/logmain.gif"
Submodel_42839a63116d49b9917d174083ffb39d.iconSrcClosed = ICONPATH + "Gif/logmain.gif"
SubmodelImgNode = insDoc(Submodel_42839a63116d49b9917d174083ffb39d, gLnk("R", "Model Image", "Content/Submodel_42839a63116d49b9917d174083ffb39d_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_42839a63116d49b9917d174083ffb39d, gFld("Entities", "Content/Sub_42839a63116d49b9917d174083ffb39d_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_42839a63116d49b9917d174083ffb39d, gFld("Attributes", "Content/Sub_42839a63116d49b9917d174083ffb39d_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_42839a63116d49b9917d174083ffb39d, gFld("Keys", "Content/Sub_42839a63116d49b9917d174083ffb39d_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_42839a63116d49b9917d174083ffb39d, gFld("Views", "Content/Sub_42839a63116d49b9917d174083ffb39d_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_42839a63116d49b9917d174083ffb39d, gFld("Relationships", "Content/Sub_42839a63116d49b9917d174083ffb39d_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
Model_Node = insFld(Diag_Node, gFld("Physical", "Content/Model_cadacbd1798245618f2ec9570e7259b7.htm"))
Model_Node.iconSrc = ICONPATH + "Gif/dimensionalmodel.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/dimensionalmodel.gif"
{
Submodel_443b2c0872304e8c9b92dd8ee01aebc7 = insFld(Model_Node, gFld("Main Model", "Content/Submodel_443b2c0872304e8c9b92dd8ee01aebc7.htm"))
Submodel_443b2c0872304e8c9b92dd8ee01aebc7.iconSrc = ICONPATH + "Gif/grnfldr.gif"
Submodel_443b2c0872304e8c9b92dd8ee01aebc7.iconSrcClosed = ICONPATH + "Gif/grnfldr.gif"
EntityFolder = insFld(Submodel_443b2c0872304e8c9b92dd8ee01aebc7, gFld("Tables", "Content/Sub_443b2c0872304e8c9b92dd8ee01aebc7_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_443b2c0872304e8c9b92dd8ee01aebc7, gFld("Columns", "Content/Sub_443b2c0872304e8c9b92dd8ee01aebc7_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_443b2c0872304e8c9b92dd8ee01aebc7, gFld("Indexes", "Content/Sub_443b2c0872304e8c9b92dd8ee01aebc7_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_443b2c0872304e8c9b92dd8ee01aebc7, gFld("Views", "Content/Sub_443b2c0872304e8c9b92dd8ee01aebc7_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_443b2c0872304e8c9b92dd8ee01aebc7, gFld("Foreign Keys", "Content/Sub_443b2c0872304e8c9b92dd8ee01aebc7_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
}
