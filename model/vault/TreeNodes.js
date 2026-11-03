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
Diag_Node = insFld(foldersTree, gFld("vault.DM1", "diagram.htm"))
Diag_Node.iconSrc = ICONPATH + "Gif/diagram.gif"
Diag_Node.iconSrcClosed = ICONPATH + "Gif/diagram.gif"
Model_Node = insFld(Diag_Node, gFld("Logical", "Content/Model_d348f93d222849aca2d0dc4822849bf3.htm"))
Model_Node.iconSrc = ICONPATH + "Gif/logical.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/logical.gif"
{
Submodel_8ef69b60b3c34093b9c82f7299f0a483 = insFld(Model_Node, gFld("Main Model", "Content/Submodel_8ef69b60b3c34093b9c82f7299f0a483.htm"))
Submodel_8ef69b60b3c34093b9c82f7299f0a483.iconSrc = ICONPATH + "Gif/logmain.gif"
Submodel_8ef69b60b3c34093b9c82f7299f0a483.iconSrcClosed = ICONPATH + "Gif/logmain.gif"
SubmodelImgNode = insDoc(Submodel_8ef69b60b3c34093b9c82f7299f0a483, gLnk("R", "Model Image", "Content/Submodel_8ef69b60b3c34093b9c82f7299f0a483_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_8ef69b60b3c34093b9c82f7299f0a483, gFld("Entities", "Content/Sub_8ef69b60b3c34093b9c82f7299f0a483_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_8ef69b60b3c34093b9c82f7299f0a483, gFld("Attributes", "Content/Sub_8ef69b60b3c34093b9c82f7299f0a483_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_8ef69b60b3c34093b9c82f7299f0a483, gFld("Keys", "Content/Sub_8ef69b60b3c34093b9c82f7299f0a483_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_8ef69b60b3c34093b9c82f7299f0a483, gFld("Views", "Content/Sub_8ef69b60b3c34093b9c82f7299f0a483_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_8ef69b60b3c34093b9c82f7299f0a483, gFld("Relationships", "Content/Sub_8ef69b60b3c34093b9c82f7299f0a483_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
Model_Node = insFld(Diag_Node, gFld("Physical", "Content/Model_95c8e6a195f544918547ee930787344c.htm"))
Model_Node.iconSrc = ICONPATH + "Gif/physical.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/physical.gif"
{
Submodel_747891a899ea41cc8a00a4544a6d0968 = insFld(Model_Node, gFld("Main Model", "Content/Submodel_747891a899ea41cc8a00a4544a6d0968.htm"))
Submodel_747891a899ea41cc8a00a4544a6d0968.iconSrc = ICONPATH + "Gif/grnfldr.gif"
Submodel_747891a899ea41cc8a00a4544a6d0968.iconSrcClosed = ICONPATH + "Gif/grnfldr.gif"
EntityFolder = insFld(Submodel_747891a899ea41cc8a00a4544a6d0968, gFld("Tables", "Content/Sub_747891a899ea41cc8a00a4544a6d0968_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_747891a899ea41cc8a00a4544a6d0968, gFld("Columns", "Content/Sub_747891a899ea41cc8a00a4544a6d0968_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_747891a899ea41cc8a00a4544a6d0968, gFld("Indexes", "Content/Sub_747891a899ea41cc8a00a4544a6d0968_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_747891a899ea41cc8a00a4544a6d0968, gFld("Views", "Content/Sub_747891a899ea41cc8a00a4544a6d0968_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_747891a899ea41cc8a00a4544a6d0968, gFld("Foreign Keys", "Content/Sub_747891a899ea41cc8a00a4544a6d0968_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
}
