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
Model_Node = insFld(Diag_Node, gFld("Logical", "Content/Model_aae6bcc8b68a4c49a9da6047d30d45d8.htm"))
Model_Node.iconSrc = ICONPATH + "Gif/logical.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/logical.gif"
{
Submodel_48663dfb38d84e1d992ec0ad8d9b6f85 = insFld(Model_Node, gFld("Main Model", "Content/Submodel_48663dfb38d84e1d992ec0ad8d9b6f85.htm"))
Submodel_48663dfb38d84e1d992ec0ad8d9b6f85.iconSrc = ICONPATH + "Gif/logmain.gif"
Submodel_48663dfb38d84e1d992ec0ad8d9b6f85.iconSrcClosed = ICONPATH + "Gif/logmain.gif"
SubmodelImgNode = insDoc(Submodel_48663dfb38d84e1d992ec0ad8d9b6f85, gLnk("R", "Model Image", "Content/Submodel_48663dfb38d84e1d992ec0ad8d9b6f85_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_48663dfb38d84e1d992ec0ad8d9b6f85, gFld("Entities", "Content/Sub_48663dfb38d84e1d992ec0ad8d9b6f85_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_48663dfb38d84e1d992ec0ad8d9b6f85, gFld("Attributes", "Content/Sub_48663dfb38d84e1d992ec0ad8d9b6f85_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_48663dfb38d84e1d992ec0ad8d9b6f85, gFld("Keys", "Content/Sub_48663dfb38d84e1d992ec0ad8d9b6f85_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_48663dfb38d84e1d992ec0ad8d9b6f85, gFld("Views", "Content/Sub_48663dfb38d84e1d992ec0ad8d9b6f85_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_48663dfb38d84e1d992ec0ad8d9b6f85, gFld("Relationships", "Content/Sub_48663dfb38d84e1d992ec0ad8d9b6f85_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
{
Submodel_ea9042c9468149ea9b0fc64f270e2a29 = insFld(Model_Node, gFld("Agent Policy", "Content/Submodel_ea9042c9468149ea9b0fc64f270e2a29.htm"))
Submodel_ea9042c9468149ea9b0fc64f270e2a29.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_ea9042c9468149ea9b0fc64f270e2a29.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_ea9042c9468149ea9b0fc64f270e2a29, gLnk("R", "Model Image", "Content/Submodel_ea9042c9468149ea9b0fc64f270e2a29_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_ea9042c9468149ea9b0fc64f270e2a29, gFld("Entities", "Content/Sub_ea9042c9468149ea9b0fc64f270e2a29_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_ea9042c9468149ea9b0fc64f270e2a29, gFld("Attributes", "Content/Sub_ea9042c9468149ea9b0fc64f270e2a29_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_ea9042c9468149ea9b0fc64f270e2a29, gFld("Keys", "Content/Sub_ea9042c9468149ea9b0fc64f270e2a29_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
RelFolder = insFld(Submodel_ea9042c9468149ea9b0fc64f270e2a29, gFld("Relationships", "Content/Sub_ea9042c9468149ea9b0fc64f270e2a29_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
{
Submodel_f5ab7bcb74a84757bde82535e2d85d82 = insFld(Model_Node, gFld("Client Policy Role", "Content/Submodel_f5ab7bcb74a84757bde82535e2d85d82.htm"))
Submodel_f5ab7bcb74a84757bde82535e2d85d82.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_f5ab7bcb74a84757bde82535e2d85d82.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_f5ab7bcb74a84757bde82535e2d85d82, gLnk("R", "Model Image", "Content/Submodel_f5ab7bcb74a84757bde82535e2d85d82_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_f5ab7bcb74a84757bde82535e2d85d82, gFld("Entities", "Content/Sub_f5ab7bcb74a84757bde82535e2d85d82_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_f5ab7bcb74a84757bde82535e2d85d82, gFld("Attributes", "Content/Sub_f5ab7bcb74a84757bde82535e2d85d82_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_f5ab7bcb74a84757bde82535e2d85d82, gFld("Keys", "Content/Sub_f5ab7bcb74a84757bde82535e2d85d82_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_f5ab7bcb74a84757bde82535e2d85d82, gFld("Views", "Content/Sub_f5ab7bcb74a84757bde82535e2d85d82_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_f5ab7bcb74a84757bde82535e2d85d82, gFld("Relationships", "Content/Sub_f5ab7bcb74a84757bde82535e2d85d82_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
{
Submodel_26cca8c47fdb4c1c9fea8b510fc38c48 = insFld(Model_Node, gFld("Policy Terms", "Content/Submodel_26cca8c47fdb4c1c9fea8b510fc38c48.htm"))
Submodel_26cca8c47fdb4c1c9fea8b510fc38c48.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_26cca8c47fdb4c1c9fea8b510fc38c48.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_26cca8c47fdb4c1c9fea8b510fc38c48, gLnk("R", "Model Image", "Content/Submodel_26cca8c47fdb4c1c9fea8b510fc38c48_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_26cca8c47fdb4c1c9fea8b510fc38c48, gFld("Entities", "Content/Sub_26cca8c47fdb4c1c9fea8b510fc38c48_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_26cca8c47fdb4c1c9fea8b510fc38c48, gFld("Attributes", "Content/Sub_26cca8c47fdb4c1c9fea8b510fc38c48_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_26cca8c47fdb4c1c9fea8b510fc38c48, gFld("Keys", "Content/Sub_26cca8c47fdb4c1c9fea8b510fc38c48_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_26cca8c47fdb4c1c9fea8b510fc38c48, gFld("Views", "Content/Sub_26cca8c47fdb4c1c9fea8b510fc38c48_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_26cca8c47fdb4c1c9fea8b510fc38c48, gFld("Relationships", "Content/Sub_26cca8c47fdb4c1c9fea8b510fc38c48_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
Model_Node = insFld(Diag_Node, gFld("Physical", "Content/Model_c62f4a2efbb0494eb7e77e391b70f629.htm"))
Model_Node.iconSrc = ICONPATH + "Gif/dimensionalmodel.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/dimensionalmodel.gif"
{
Submodel_55c99e5b09934044978d41c55ef533b4 = insFld(Model_Node, gFld("Main Model", "Content/Submodel_55c99e5b09934044978d41c55ef533b4.htm"))
Submodel_55c99e5b09934044978d41c55ef533b4.iconSrc = ICONPATH + "Gif/grnfldr.gif"
Submodel_55c99e5b09934044978d41c55ef533b4.iconSrcClosed = ICONPATH + "Gif/grnfldr.gif"
EntityFolder = insFld(Submodel_55c99e5b09934044978d41c55ef533b4, gFld("Tables", "Content/Sub_55c99e5b09934044978d41c55ef533b4_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_55c99e5b09934044978d41c55ef533b4, gFld("Columns", "Content/Sub_55c99e5b09934044978d41c55ef533b4_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_55c99e5b09934044978d41c55ef533b4, gFld("Indexes", "Content/Sub_55c99e5b09934044978d41c55ef533b4_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
ViewFolder = insFld(Submodel_55c99e5b09934044978d41c55ef533b4, gFld("Views", "Content/Sub_55c99e5b09934044978d41c55ef533b4_ViewFrame.htm"))
ViewFolder.iconSrc = ICONPATH + "Gif/viewfldr.gif"
ViewFolder.iconSrcClosed = ICONPATH + "Gif/viewfldr.gif"
RelFolder = insFld(Submodel_55c99e5b09934044978d41c55ef533b4, gFld("Foreign Keys", "Content/Sub_55c99e5b09934044978d41c55ef533b4_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
}
