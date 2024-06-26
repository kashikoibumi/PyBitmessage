"""
src/settingsmixin.py
====================

"""

from unqstr import ustr
from qtpy import QtCore, QtWidgets


class SettingsMixin(object):
    """Mixin for adding geometry and state saving between restarts"""

    def warnIfNoObjectName(self):
        """
        Handle objects which don't have a name. Currently it ignores them. Objects without a name can't have their
        state/geometry saved as they don't have an identifier.
        """
        if self.objectName() == "":
            # .. todo:: logger
            pass

    def writeState(self, source):
        """Save object state (e.g. relative position of a splitter)"""
        self.warnIfNoObjectName()
        settings = QtCore.QSettings()
        settings.beginGroup(self.objectName())
        settings.setValue("state", source.saveState())
        settings.endGroup()

    def writeGeometry(self, source):
        """Save object geometry (e.g. window size and position)"""
        self.warnIfNoObjectName()
        settings = QtCore.QSettings()
        settings.beginGroup(self.objectName())
        settings.setValue("geometry", source.saveGeometry())
        settings.endGroup()

    def readGeometry(self, target):
        """Load object geometry"""
        self.warnIfNoObjectName()
        settings = QtCore.QSettings()
        try:
            geom = settings.value(
                "/".join([ustr(self.objectName()), "geometry"]))
            target.restoreGeometry(geom)
        except Exception:
            pass

    def readState(self, target):
        """Load object state"""
        self.warnIfNoObjectName()
        settings = QtCore.QSettings()
        try:
            state = settings.value("/".join([ustr(self.objectName()), "state"]))
            target.restoreState(state)
        except Exception:
            pass


class SMainWindow(QtWidgets.QMainWindow, SettingsMixin):
    """Main window with Settings functionality"""

    def loadSettings(self):
        """Load main window settings."""
        self.readGeometry(self)
        self.readState(self)

    def saveSettings(self):
        """Save main window settings"""
        self.writeState(self)
        self.writeGeometry(self)


class STableWidget(QtWidgets.QTableWidget, SettingsMixin):
    """Table widget with Settings functionality"""

    def loadSettings(self):
        """Load table settings."""
        self.readState(self.horizontalHeader())

    def saveSettings(self):
        """Save table settings."""
        self.writeState(self.horizontalHeader())


class SSplitter(QtWidgets.QSplitter, SettingsMixin):
    """Splitter with Settings functionality"""

    def loadSettings(self):
        """Load splitter settings"""
        self.readState(self)

    def saveSettings(self):
        """Save splitter settings."""
        self.writeState(self)


class STreeWidget(QtWidgets.QTreeWidget, SettingsMixin):
    """Tree widget with settings functionality"""

    def loadSettings(self):
        """Load tree settings. Unimplemented."""
        # recurse children
        # self.readState(self)
        pass

    def saveSettings(self):
        """Save tree settings. Unimplemented."""
        # recurse children
        # self.writeState(self)
        pass
